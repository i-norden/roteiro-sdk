import unittest

from roteiro import vcs
from roteiro.client import RoteiroClient


class VCSTests(unittest.TestCase):
    def test_init_repo_creates_managed_repo(self):
        client = RoteiroClient("https://example.com", project_id=42)
        captured = {}

        def fake_post(path, body=None):
            captured["path"] = path
            captured["body"] = body
            return {
                "id": "repo_123",
                "name": "roads-history",
                "tenant_id": 7,
                "project_id": 42,
                "dataset_name": "roads",
                "created_by": 99,
                "created_at": "2026-03-25T00:00:00Z",
            }

        client._post = fake_post  # type: ignore[method-assign]

        repo = vcs.init_repo(client, "roads-history", dataset_name="roads")

        self.assertEqual(captured["path"], "/api/vcs/repos")
        self.assertEqual(
            captured["body"],
            {
                "name": "roads-history",
                "project_id": 42,
                "dataset_name": "roads",
            },
        )
        self.assertEqual(repo.id, "repo_123")
        self.assertEqual(repo.project_id, 42)

    def test_commit_log_and_diff_use_repo_id(self):
        client = RoteiroClient("https://example.com")
        captured = {"gets": []}

        def fake_post(path, body=None):
            captured["post_path"] = path
            captured["post_body"] = body
            return {
                "id": "commit_1",
                "message": "Initial import",
                "timestamp": "2026-03-25T00:00:00Z",
                "parent": "",
                "blob_id": "blob_1",
            }

        def fake_get(path):
            captured["gets"].append(path)
            if path.startswith("/api/vcs/log?"):
                return [
                    {
                        "id": "commit_1",
                        "message": "Initial import",
                        "timestamp": "2026-03-25T00:00:00Z",
                    }
                ]
            return {
                "added": [],
                "removed": [],
                "modified": [],
                "stats": {
                    "added": 0,
                    "removed": 0,
                    "modified": 0,
                    "unchanged": 1,
                },
            }

        client._post = fake_post  # type: ignore[method-assign]
        client._get = fake_get  # type: ignore[method-assign]

        commit = vcs.commit(
            client,
            "repo_123",
            "/data/roads.geojson",
            "Initial import",
        )
        commits = vcs.log(client, "repo_123")
        diff = vcs.diff(client, "repo_123", "commit_0", "commit_1")

        self.assertEqual(captured["post_path"], "/api/vcs/commit")
        self.assertEqual(
            captured["post_body"],
            {
                "repo_id": "repo_123",
                "input": "/data/roads.geojson",
                "message": "Initial import",
            },
        )
        self.assertEqual(captured["gets"][0], "/api/vcs/log?repo_id=repo_123")
        self.assertEqual(
            captured["gets"][1],
            "/api/vcs/diff?repo_id=repo_123&from=commit_0&to=commit_1",
        )
        self.assertEqual(commit.blob_id, "blob_1")
        self.assertEqual(len(commits), 1)
        self.assertEqual(diff.stats["unchanged"], 1)


if __name__ == "__main__":
    unittest.main()
