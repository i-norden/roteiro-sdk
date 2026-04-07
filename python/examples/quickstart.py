from roteiro import Pipeline, RoteiroClient


def main() -> None:
    client = RoteiroClient(
        base_url="http://localhost:8080",
        project_id=42,
    )

    health = client.health()
    bodies = client.list_bodies()
    result = Pipeline(client).buffer(100).simplify(10).execute("roads")

    print(
        {
            "health": health.status,
            "body_count": len(bodies.get("bodies", [])) if isinstance(bodies, dict) else None,
            "result": result,
        }
    )


if __name__ == "__main__":
    main()
