"""AUTO-GENERATED FILE. DO NOT EDIT."""
from __future__ import annotations

from typing import Any, Dict, Optional
from urllib.parse import quote, urlencode

from .client import RoteiroClient


def _quote_path_value(value: Any) -> str:
    return quote(str(value), safe="")

class RoteiroGeneratedApi:
    def __init__(self, client: RoteiroClient) -> None:
        self._client = client

    def get_landing_page(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """OGC API landing page"""
        path = "/"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_activity(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/activity"""
        path = "/api/activity"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_audit_log(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List audit log entries (admin only)"""
        path = "/api/admin/audit"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_audit_log(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/audit-log"""
        path = "/api/admin/audit-log"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_audit_log_actions(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/audit-log/actions"""
        path = "/api/admin/audit-log/actions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_audit_log_archive(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/audit-log/archive"""
        path = "/api/admin/audit-log/archive"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_audit_log_export(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/audit-log/export"""
        path = "/api/admin/audit-log/export"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_audit_log_verify(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/audit-log/verify"""
        path = "/api/admin/audit-log/verify"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_backup(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/backup"""
        path = "/api/admin/backup"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_backup_status(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/backup/status"""
        path = "/api/admin/backup/status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_backups(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/backups"""
        path = "/api/admin/backups"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_compliance_status(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/compliance/status"""
        path = "/api/admin/compliance/status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_dr_config(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/dr/config"""
        path = "/api/admin/dr/config"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_admin_dr_config(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/admin/dr/config"""
        path = "/api/admin/dr/config"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_health(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/health"""
        path = "/api/admin/health"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_lti_keys(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/lti/keys"""
        path = "/api/admin/lti/keys"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_lti_keys(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/lti/keys"""
        path = "/api/admin/lti/keys"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_lti_platforms(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/lti/platforms"""
        path = "/api/admin/lti/platforms"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_lti_platforms(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/lti/platforms"""
        path = "/api/admin/lti/platforms"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_admin_lti_platforms_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/admin/lti/platforms/{id}"""
        path = f"/api/admin/lti/platforms/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_admin_lti_platforms_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/admin/lti/platforms/{id}"""
        path = f"/api/admin/lti/platforms/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def get_admin_onboarding_analytics(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Onboarding funnel analytics (admin only)"""
        path = "/api/admin/onboarding-analytics"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_restore(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/restore"""
        path = "/api/admin/restore"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_sso_group_mappings(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/sso/group-mappings"""
        path = "/api/admin/sso/group-mappings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_sso_group_mappings(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/sso/group-mappings"""
        path = "/api/admin/sso/group-mappings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_admin_sso_group_mappings_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/admin/sso/group-mappings/{id}"""
        path = f"/api/admin/sso/group-mappings/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_admin_sso_group_mappings_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/admin/sso/group-mappings/{id}"""
        path = f"/api/admin/sso/group-mappings/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_sso_preview(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/sso/preview"""
        path = "/api/admin/sso/preview"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_sso_status(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/sso/status"""
        path = "/api/admin/sso/status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_sso_sync(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/admin/sso/sync"""
        path = "/api/admin/sso/sync"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_stats(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/stats"""
        path = "/api/admin/stats"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_usage(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/admin/usage"""
        path = "/api/admin/usage"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_users(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List all users (admin only)"""
        path = "/api/admin/users"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_user(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update a user (admin only)"""
        path = f"/api/admin/users/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_user(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a user (admin only)"""
        path = f"/api/admin/users/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def post_api_ai_analyze(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Generate geoprocessing pipeline from natural language"""
        path = "/api/ai/analyze"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def post_api_ai_nl_query(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Natural language to CQL2 filter query"""
        path = "/api/ai/nl-query"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def post_api_ai_nl_to_sql(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Natural language to PostGIS SQL"""
        path = "/api/ai/nl-to-sql"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_analysis_jobs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/analysis/jobs"""
        path = "/api/analysis/jobs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_analysis_jobs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/analysis/jobs"""
        path = "/api/analysis/jobs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_analysis_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/analysis/jobs/{id}"""
        path = f"/api/analysis/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_analysis_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/analysis/jobs/{id}"""
        path = f"/api/analysis/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_analysis_operations(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List available analysis operations"""
        path = "/api/analysis/operations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def record_onboarding_analytics_event(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Record onboarding analytics event"""
        path = "/api/analytics/events"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_annotations_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/annotations/{id}"""
        path = f"/api/annotations/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_annotations_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/annotations/{id}"""
        path = f"/api/annotations/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_annotations_id_resolve(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/annotations/{id}/resolve"""
        path = f"/api/annotations/{_quote_path_value(id)}/resolve"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_assignments_assignment_id_code_config(self, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/assignments/{assignmentId}/code-config"""
        path = f"/api/assignments/{_quote_path_value(assignmentId)}/code-config"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_assignments_assignment_id_code_config(self, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/assignments/{assignmentId}/code-config"""
        path = f"/api/assignments/{_quote_path_value(assignmentId)}/code-config"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_attachments_aid(self, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/attachments/{aid}"""
        path = f"/api/attachments/{_quote_path_value(aid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_attachments_aid(self, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/attachments/{aid}"""
        path = f"/api/attachments/{_quote_path_value(aid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_attachments_aid_thumbnail(self, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/attachments/{aid}/thumbnail"""
        path = f"/api/attachments/{_quote_path_value(aid)}/thumbnail"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_auth_2fa_disable(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/auth/2fa/disable"""
        path = "/api/auth/2fa/disable"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_auth_2fa_enable(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/auth/2fa/enable"""
        path = "/api/auth/2fa/enable"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_api_keys(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List API keys for authenticated user"""
        path = "/api/auth/api-keys"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_api_key(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a new API key"""
        path = "/api/auth/api-keys"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def revoke_api_key(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Revoke an API key"""
        path = f"/api/auth/api-keys/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def forgot_password(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Request password reset token"""
        path = "/api/auth/forgot-password"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_auth_locale(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/auth/locale"""
        path = "/api/auth/locale"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def login(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Login with credentials"""
        path = "/api/auth/login"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def logout(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Logout current session"""
        path = "/api/auth/logout"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_current_user(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get current user"""
        path = "/api/auth/me"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_profile(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update user profile"""
        path = "/api/auth/profile"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def register_user(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Register a new user"""
        path = "/api/auth/register"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_auth_resend_verification(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/auth/resend-verification"""
        path = "/api/auth/resend-verification"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def reset_password(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Reset password with token"""
        path = "/api/auth/reset-password"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def sso_callback(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """SSO/OIDC callback endpoint"""
        path = "/api/auth/sso/callback"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def sso_login(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Initiate SSO/OIDC login flow"""
        path = "/api/auth/sso/login"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_auth_verify_2fa(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/auth/verify-2fa"""
        path = "/api/auth/verify-2fa"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_auth_verify_email(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/auth/verify-email"""
        path = "/api/auth/verify-email"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_billing_academic_verify(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/billing/academic-verify"""
        path = "/api/billing/academic-verify"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_billing_invoices(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/billing/invoices"""
        path = "/api/billing/invoices"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_current_plan(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get current user's billing plan and usage"""
        path = "/api/billing/plan"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_plans(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List available plans"""
        path = "/api/billing/plans"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_billing_portal(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/billing/portal"""
        path = "/api/billing/portal"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_billing_status(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/billing/status"""
        path = "/api/billing/status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def upgrade_plan(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Upgrade to a paid plan (creates Stripe checkout)"""
        path = "/api/billing/upgrade"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_billing_usage(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get current billing period usage"""
        path = "/api/billing/usage"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_billing_usage_history(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/billing/usage/history"""
        path = "/api/billing/usage/history"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_billing_webhook(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/billing/webhook"""
        path = "/api/billing/webhook"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_bookmarks(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List spatial bookmarks"""
        path = "/api/bookmarks"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_bookmark(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a bookmark"""
        path = "/api/bookmarks"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def delete_bookmark(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a bookmark"""
        path = f"/api/bookmarks/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_bulk_delete(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/bulk/delete"""
        path = "/api/bulk/delete"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_bulk_export(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/bulk/export"""
        path = "/api/bulk/export"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_bulk_import(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/bulk/import"""
        path = "/api/bulk/import"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_bulk_update(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/bulk/update"""
        path = "/api/bulk/update"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_field_campaign(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get field campaign"""
        path = f"/api/campaigns/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_field_campaign(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update field campaign"""
        path = f"/api/campaigns/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_field_campaign(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete field campaign"""
        path = f"/api/campaigns/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_my_campaign_observations(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List authenticated user observations for a campaign"""
        path = f"/api/campaigns/{_quote_path_value(id)}/my-observations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_campaign_observations(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List campaign observations"""
        path = f"/api/campaigns/{_quote_path_value(id)}/observations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_campaign_observation(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create campaign observation"""
        path = f"/api/campaigns/{_quote_path_value(id)}/observations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def export_campaign_observations_geo_json(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Export campaign observations as GeoJSON"""
        path = f"/api/campaigns/{_quote_path_value(id)}/observations/export.geojson"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_campaign_stac_catalog(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Campaign STAC catalog root"""
        path = f"/api/campaigns/{_quote_path_value(id)}/stac"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_campaign_stac_collection(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Campaign STAC collection"""
        path = f"/api/campaigns/{_quote_path_value(id)}/stac/collection"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_campaign_stac_items(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Campaign STAC items"""
        path = f"/api/campaigns/{_quote_path_value(id)}/stac/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_campaign_stac_item(self, id: str, itemId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Campaign STAC item by ID"""
        path = f"/api/campaigns/{_quote_path_value(id)}/stac/items/{_quote_path_value(itemId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def search_campaign_stac_items(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Search campaign STAC items"""
        path = f"/api/campaigns/{_quote_path_value(id)}/stac/search"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_catalog(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List public data catalog entries"""
        path = "/api/catalog"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_catalog_annotations_id_vote(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/catalog/annotations/{id}/vote"""
        path = f"/api/catalog/annotations/{_quote_path_value(id)}/vote"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_catalog_categories(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List catalog categories"""
        path = "/api/catalog/categories"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_enhanced_catalog(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List enhanced catalog entries with filters"""
        path = "/api/catalog/enhanced"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_enhanced_catalog_entry(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get enhanced catalog entry by ID"""
        path = f"/api/catalog/enhanced/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_catalog_enhanced_id_annotations(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/catalog/enhanced/{id}/annotations"""
        path = f"/api/catalog/enhanced/{_quote_path_value(id)}/annotations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_catalog_enhanced_id_annotations(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/catalog/enhanced/{id}/annotations"""
        path = f"/api/catalog/enhanced/{_quote_path_value(id)}/annotations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_patch_api_catalog_enhanced_id_verify(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PATCH /api/catalog/enhanced/{id}/verify"""
        path = f"/api/catalog/enhanced/{_quote_path_value(id)}/verify"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PATCH', path, body=payload, extra_headers=extra_headers)

    def import_from_catalog(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Import a dataset from the public catalog"""
        path = "/api/catalog/import"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_catalog_tags(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List catalog tags ordered by frequency"""
        path = "/api/catalog/tags"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_classrooms(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List classrooms for the authenticated user"""
        path = "/api/classrooms"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_classroom(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a classroom"""
        path = "/api/classrooms"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def join_classroom(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Join a classroom using a join code"""
        path = "/api/classrooms/join"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_templates(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/templates"""
        path = "/api/classrooms/templates"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_templates_db(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/templates/db"""
        path = "/api/classrooms/templates/db"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_analytics(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/analytics"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/analytics"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_analytics_latest(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/analytics/latest"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/analytics/latest"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_analytics_refresh(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/analytics/refresh"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/analytics/refresh"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_assignments_assignment_id_my_team(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/assignments/{assignmentId}/my-team"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/my-team"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_assignments_assignment_id_peer_reviews(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/peer-reviews"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/peer-reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_assignments_assignment_id_plagiarism_check(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/plagiarism-check"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/plagiarism-check"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_assignments_assignment_id_plagiarism_check_all(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/plagiarism-check-all"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/plagiarism-check-all"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_assignments_assignment_id_plagiarism_reports(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/assignments/{assignmentId}/plagiarism-reports"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/plagiarism-reports"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_assignments_assignment_id_teams(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/assignments/{assignmentId}/teams"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/teams"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_assignments_assignment_id_teams(self, classroomId: str, assignmentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/teams"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/teams"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_classrooms_classroom_id_assignments_assignment_id_teams_team_id(self, classroomId: str, assignmentId: str, teamId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/classrooms/{classroomId}/assignments/{assignmentId}/teams/{teamId}"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/teams/{_quote_path_value(teamId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_assignments_assignment_id_teams_team_id_members(self, classroomId: str, assignmentId: str, teamId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/teams/{teamId}/members"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/teams/{_quote_path_value(teamId)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_classrooms_classroom_id_assignments_assignment_id_teams_team_id_members_user_id(self, classroomId: str, assignmentId: str, teamId: str, userId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/classrooms/{classroomId}/assignments/{assignmentId}/teams/{teamId}/members/{userId}"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/assignments/{_quote_path_value(assignmentId)}/teams/{_quote_path_value(teamId)}/members/{_quote_path_value(userId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_campaigns(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/campaigns"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/campaigns"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_campaigns(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/campaigns"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/campaigns"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_forums(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/forums"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/forums"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_classroom_id_forums(self, classroomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{classroomId}/forums"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/forums"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_classroom_id_submissions_submission_id_peer_reviews(self, classroomId: str, submissionId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{classroomId}/submissions/{submissionId}/peer-reviews"""
        path = f"/api/classrooms/{_quote_path_value(classroomId)}/submissions/{_quote_path_value(submissionId)}/peer-reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_classroom(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get classroom details"""
        path = f"/api/classrooms/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_classrooms_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/classrooms/{id}"""
        path = f"/api/classrooms/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_classrooms_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/classrooms/{id}"""
        path = f"/api/classrooms/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_assignments(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List assignments in a classroom"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_assignment(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create an assignment"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_assignment(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get assignment details"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_classrooms_id_assignments_aid(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/classrooms/{id}/assignments/{aid}"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_classrooms_id_assignments_aid(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/classrooms/{id}/assignments/{aid}"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_id_assignments_aid_auto_grade(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{id}/assignments/{aid}/auto-grade"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/auto-grade"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_assignments_aid_rubric(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/assignments/{aid}/rubric"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/rubric"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_id_assignments_aid_rubric(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{id}/assignments/{aid}/rubric"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/rubric"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_classrooms_id_assignments_aid_rubric(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/classrooms/{id}/assignments/{aid}/rubric"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/rubric"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def start_assignment(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Start an assignment (create a submission)"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/start"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_submissions(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List submissions for an assignment"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/submissions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def grade_submission(self, id: str, aid: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Grade a submission"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/submissions/{_quote_path_value(sid)}/grade"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_id_assignments_aid_submissions_sid_return(self, id: str, aid: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{id}/assignments/{aid}/submissions/{sid}/return"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/submissions/{_quote_path_value(sid)}/return"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def submit_work(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Submit work for grading"""
        path = f"/api/classrooms/{_quote_path_value(id)}/assignments/{_quote_path_value(aid)}/submit"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_curricula(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/curricula"""
        path = f"/api/classrooms/{_quote_path_value(id)}/curricula"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_grades_export(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/grades/export"""
        path = f"/api/classrooms/{_quote_path_value(id)}/grades/export"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_classrooms_id_import(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/classrooms/{id}/import"""
        path = f"/api/classrooms/{_quote_path_value(id)}/import"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_live(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/live"""
        path = f"/api/classrooms/{_quote_path_value(id)}/live"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_members(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/members"""
        path = f"/api/classrooms/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_classrooms_id_members_uid(self, id: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/classrooms/{id}/members/{uid}"""
        path = f"/api/classrooms/{_quote_path_value(id)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_classrooms_id_members_uid(self, id: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/classrooms/{id}/members/{uid}"""
        path = f"/api/classrooms/{_quote_path_value(id)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_my_role(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/my-role"""
        path = f"/api/classrooms/{_quote_path_value(id)}/my-role"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_my_submissions(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/my-submissions"""
        path = f"/api/classrooms/{_quote_path_value(id)}/my-submissions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_progress(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/progress"""
        path = f"/api/classrooms/{_quote_path_value(id)}/progress"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_classrooms_id_quizzes(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/classrooms/{id}/quizzes"""
        path = f"/api/classrooms/{_quote_path_value(id)}/quizzes"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_code_assignments_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/code-assignments/{id}"""
        path = f"/api/code-assignments/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_code_assignments_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/code-assignments/{id}"""
        path = f"/api/code-assignments/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_code_assignments_id_run(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/code-assignments/{id}/run"""
        path = f"/api/code-assignments/{_quote_path_value(id)}/run"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_code_assignments_id_submissions(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/code-assignments/{id}/submissions"""
        path = f"/api/code-assignments/{_quote_path_value(id)}/submissions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_code_assignments_id_submit(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/code-assignments/{id}/submit"""
        path = f"/api/code-assignments/{_quote_path_value(id)}/submit"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_code_submissions_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/code-submissions/{id}"""
        path = f"/api/code-submissions/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def collab_metrics(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Collaboration hub metrics"""
        path = "/api/collab/metrics"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_collab_rooms(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List active collaboration rooms"""
        path = "/api/collab/rooms"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collab_room_id_contributions(self, roomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collab/{roomId}/contributions"""
        path = f"/api/collab/{_quote_path_value(roomId)}/contributions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collab_room_id_summary(self, roomId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collab/{roomId}/summary"""
        path = f"/api/collab/{_quote_path_value(roomId)}/summary"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_history(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/history"""
        path = f"/api/collections/{_quote_path_value(id)}/history"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_items_arrow(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/items.arrow"""
        path = f"/api/collections/{_quote_path_value(id)}/items.arrow"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_items_parquet(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/items.parquet"""
        path = f"/api/collections/{_quote_path_value(id)}/items.parquet"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_items_feature_id_comments(self, id: str, featureId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/items/{featureId}/comments"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(featureId)}/comments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_collections_id_items_feature_id_comments(self, id: str, featureId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/collections/{id}/items/{featureId}/comments"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(featureId)}/comments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_collections_id_items_feature_id_comments_comment_id(self, id: str, featureId: str, commentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/collections/{id}/items/{featureId}/comments/{commentId}"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(featureId)}/comments/{_quote_path_value(commentId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_collections_id_items_feature_id_comments_comment_id(self, id: str, featureId: str, commentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/collections/{id}/items/{featureId}/comments/{commentId}"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(featureId)}/comments/{_quote_path_value(commentId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_items_fid_attachments(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/items/{fid}/attachments"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}/attachments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_collections_id_items_fid_attachments(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/collections/{id}/items/{fid}/attachments"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}/attachments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_items_fid_attachments_count(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/items/{fid}/attachments/count"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}/attachments/count"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_collections_id_items_fid_history(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/collections/{id}/items/{fid}/history"""
        path = f"/api/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}/history"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_comments_comment_id_replies(self, commentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/comments/{commentId}/replies"""
        path = f"/api/comments/{_quote_path_value(commentId)}/replies"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def convert_dataset(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Convert dataset format"""
        path = "/api/convert"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_curricula(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/curricula"""
        path = "/api/curricula"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_curricula(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/curricula"""
        path = "/api/curricula"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_curricula_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/curricula/{id}"""
        path = f"/api/curricula/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_curricula_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/curricula/{id}"""
        path = f"/api/curricula/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_curricula_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/curricula/{id}"""
        path = f"/api/curricula/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_curricula_id_lessons(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/curricula/{id}/lessons"""
        path = f"/api/curricula/{_quote_path_value(id)}/lessons"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_curricula_id_lessons_lid(self, id: str, lid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/curricula/{id}/lessons/{lid}"""
        path = f"/api/curricula/{_quote_path_value(id)}/lessons/{_quote_path_value(lid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_curricula_id_lessons_lid(self, id: str, lid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/curricula/{id}/lessons/{lid}"""
        path = f"/api/curricula/{_quote_path_value(id)}/lessons/{_quote_path_value(lid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_curricula_id_lessons_lid(self, id: str, lid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/curricula/{id}/lessons/{lid}"""
        path = f"/api/curricula/{_quote_path_value(id)}/lessons/{_quote_path_value(lid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_curricula_id_lessons_lid_progress(self, id: str, lid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/curricula/{id}/lessons/{lid}/progress"""
        path = f"/api/curricula/{_quote_path_value(id)}/lessons/{_quote_path_value(lid)}/progress"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_curricula_id_progress(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/curricula/{id}/progress"""
        path = f"/api/curricula/{_quote_path_value(id)}/progress"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_datasets_id_lineage(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/datasets/{id}/lineage"""
        path = f"/api/datasets/{_quote_path_value(id)}/lineage"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_datasets_name_metadata(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/datasets/{name}/metadata"""
        path = f"/api/datasets/{_quote_path_value(name)}/metadata"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_patch_api_datasets_name_metadata(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PATCH /api/datasets/{name}/metadata"""
        path = f"/api/datasets/{_quote_path_value(name)}/metadata"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PATCH', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_datasets_name_profile(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/datasets/{name}/profile"""
        path = f"/api/datasets/{_quote_path_value(name)}/profile"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_datasets_name_schema(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/datasets/{name}/schema"""
        path = f"/api/datasets/{_quote_path_value(name)}/schema"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_datasets_name_schema(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/datasets/{name}/schema"""
        path = f"/api/datasets/{_quote_path_value(name)}/schema"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_datasets_name_validate(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/datasets/{name}/validate"""
        path = f"/api/datasets/{_quote_path_value(name)}/validate"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_datasets_name_validation_rules(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/datasets/{name}/validation-rules"""
        path = f"/api/datasets/{_quote_path_value(name)}/validation-rules"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_datasets_name_validation_rules(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/datasets/{name}/validation-rules"""
        path = f"/api/datasets/{_quote_path_value(name)}/validation-rules"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def diff_datasets(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compare two datasets"""
        path = "/api/diff"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_discover(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/discover"""
        path = "/api/discover"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_swagger_ui(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """API documentation UI"""
        path = "/api/docs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_docs_internal_manifest(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/docs/internal/manifest"""
        path = "/api/docs/internal/manifest"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_docs_internal_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/docs/internal/{id}"""
        path = f"/api/docs/internal/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_docs_public_manifest(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/docs/public/manifest"""
        path = "/api/docs/public/manifest"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_docs_public_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/docs/public/{id}"""
        path = f"/api/docs/public/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_errors(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/errors"""
        path = "/api/errors"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def export_data(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Export GeoJSON data to another format"""
        path = "/api/export"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_federation_sources(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/federation/sources"""
        path = "/api/federation/sources"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_federation_sources(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/federation/sources"""
        path = "/api/federation/sources"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_federation_sources_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/federation/sources/{id}"""
        path = f"/api/federation/sources/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_federation_sources_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/federation/sources/{id}"""
        path = f"/api/federation/sources/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_formats(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/formats"""
        path = "/api/formats"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_forums_forum_id(self, forumId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/forums/{forumId}"""
        path = f"/api/forums/{_quote_path_value(forumId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_forums_forum_id(self, forumId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/forums/{forumId}"""
        path = f"/api/forums/{_quote_path_value(forumId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_forums_forum_id_lock(self, forumId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/forums/{forumId}/lock"""
        path = f"/api/forums/{_quote_path_value(forumId)}/lock"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_forums_forum_id_posts(self, forumId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/forums/{forumId}/posts"""
        path = f"/api/forums/{_quote_path_value(forumId)}/posts"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_forums_forum_id_posts(self, forumId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/forums/{forumId}/posts"""
        path = f"/api/forums/{_quote_path_value(forumId)}/posts"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_gdpr_delete_cancel(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/gdpr/delete-cancel"""
        path = "/api/gdpr/delete-cancel"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_gdpr_delete_request(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/gdpr/delete-request"""
        path = "/api/gdpr/delete-request"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_gdpr_delete_status(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/gdpr/delete-status"""
        path = "/api/gdpr/delete-status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_gdpr_export(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/gdpr/export"""
        path = "/api/gdpr/export"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_geo(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/geo"""
        path = "/api/geo"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def geocode(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Forward geocode an address"""
        path = "/api/geocode"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_geocode_batch(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/geocode/batch"""
        path = "/api/geocode/batch"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def reverse_geocode(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Reverse geocode coordinates"""
        path = "/api/geocode/reverse"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_buildings(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List all buildings"""
        path = "/api/indoor/buildings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_building(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a building with floors, spaces, and transitions"""
        path = "/api/indoor/buildings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_building(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get building with floors and transitions"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_building(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update a building"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_building(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a building"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def get_accessibility_validation(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Accessibility compliance analysis"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/analysis/accessibility"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_analysis_dead_zones(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/analysis/dead-zones"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/analysis/dead-zones"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_analysis_reachable(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/analysis/reachable"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/analysis/reachable"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_historical_analytics(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Historical occupancy and booking analytics"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/analytics"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_assets(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List assets in a building"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/assets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_asset(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create an asset"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/assets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def update_asset_position(self, id: str, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update asset position"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/assets/{_quote_path_value(aid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def list_bookings(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List bookings"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/bookings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_booking(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a booking"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/bookings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def cancel_booking(self, id: str, bid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Cancel a booking"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/bookings/{_quote_path_value(bid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def checkin_booking(self, id: str, bid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Check in to a booking"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/bookings/{_quote_path_value(bid)}/checkin"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_boundaries(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List boundaries"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/boundaries"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_boundary(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create boundary"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/boundaries"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_boundary(self, id: str, bid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get boundary"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/boundaries/{_quote_path_value(bid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_boundary(self, id: str, bid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update boundary"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/boundaries/{_quote_path_value(bid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_boundary(self, id: str, bid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete boundary"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/boundaries/{_quote_path_value(bid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def get_evacuation_routes(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute evacuation routes"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/evacuation"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def trigger_evacuation_alert(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Trigger evacuation alert event"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/evacuation/alert"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_evacuation_ot(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Optimal transport evacuation plan"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/evacuation/optimal"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def export_imdf(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Export building as IMDF"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/export/imdf"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_export_indoorgml(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/export/indoorgml"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/export/indoorgml"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_floors(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List floors in a building"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/floors"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_floor(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a floor"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/floors"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def upload_floor_plan(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Upload floor plan image/PDF"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/floors/{_quote_path_value(fid)}/plan"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_floor_spaces(self, id: str, level: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List spaces on a floor"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/floors/{_quote_path_value(level)}/spaces"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_geofences(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List geofences"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/geofences"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_geofence(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create geofence"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/geofences"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_geofence(self, id: str, gid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get geofence"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/geofences/{_quote_path_value(gid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_geofence(self, id: str, gid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update geofence"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/geofences/{_quote_path_value(gid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_geofence(self, id: str, gid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete geofence"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/geofences/{_quote_path_value(gid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def building_occupancy(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get building occupancy analytics"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/occupancy"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def ingest_positions(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Batch ingest device positions"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/positions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_latest_positions(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Latest position per device"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/positions/latest"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_position_history(self, id: str, deviceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Device position history"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/positions/{_quote_path_value(deviceId)}/history"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_scenarios(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/scenarios"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/scenarios"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_indoor_buildings_id_scenarios(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/indoor/buildings/{id}/scenarios"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/scenarios"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_scenarios_sid(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/scenarios/{sid}"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/scenarios/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_indoor_buildings_id_scenarios_sid(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/indoor/buildings/{id}/scenarios/{sid}"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/scenarios/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_indoor_buildings_id_scenarios_sid(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/indoor/buildings/{id}/scenarios/{sid}"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/scenarios/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_sensors(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/sensors"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/sensors"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_indoor_buildings_id_sensors(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/indoor/buildings/{id}/sensors"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/sensors"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_indoor_sensor_heatmap(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Sensor heatmap aggregation by space"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/sensors/heatmap"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_indoor_sensor_time_series(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Sensor timeseries for space/sensor type"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/sensors/timeseries"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def indoor_fire_evacuation(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Coupled fire and evacuation simulation"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/simulate/fire-evacuation"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def create_space(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a space in a building"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/spaces"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_space(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a single space"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/spaces/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_indoor_buildings_id_spaces_sid(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/indoor/buildings/{id}/spaces/{sid}"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/spaces/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_indoor_buildings_id_spaces_sid(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/indoor/buildings/{id}/spaces/{sid}"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/spaces/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def indoor_spectral_analysis(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Spectral graph analysis"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/spectral"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_building_stats(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get building statistics"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/stats"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def indoor_stream(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Real-time indoor event stream (SSE)"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/stream"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_indoor_buildings_id_stream_status(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/indoor/buildings/{id}/stream/status"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/stream/status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def indoor_topology_compare(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compare topology of two buildings"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/topology/compare"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_topology_resilience(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Topological connectivity resilience"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/topology/resilience"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_topology_track(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Track topology across building state snapshots"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/topology/track"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_transitions(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List transitions in a building"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/transitions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def validate_building(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Validate building topology/integrity"""
        path = f"/api/indoor/buildings/{_quote_path_value(id)}/validate"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_campuses(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List campuses"""
        path = "/api/indoor/campuses"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_campus(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create campus"""
        path = "/api/indoor/campuses"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_campus(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get campus"""
        path = f"/api/indoor/campuses/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_campus(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update campus"""
        path = f"/api/indoor/campuses/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_campus(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete campus"""
        path = f"/api/indoor/campuses/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_campus_buildings(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List buildings in a campus"""
        path = f"/api/indoor/campuses/{_quote_path_value(id)}/buildings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def indoor_forecast(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Multi-hour indoor condition forecast"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/forecast"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_manifold_navigate(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Riemannian cost-weighted navigation"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/navigate/manifold"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_acoustics(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Indoor acoustic ray tracing"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/simulate/acoustics"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_airflow(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """LBM indoor airflow / ventilation simulation"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/simulate/airflow"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_infection_risk(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Aerosol infection risk model"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/simulate/infection-risk"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_rf_coverage(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """RF / wireless signal coverage"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/simulate/rf"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def indoor_thermal(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Indoor thermal distribution"""
        path = f"/api/indoor/floors/{_quote_path_value(id)}/simulate/thermal"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def import_building(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Import a building from IFC or IndoorGML"""
        path = "/api/indoor/import"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def navigate_indoor(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Find indoor navigation path between two spaces"""
        path = "/api/indoor/navigate"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def find_nearest_indoor(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Find nearest reachable space matching criteria"""
        path = "/api/indoor/navigate/nearest"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def navigate_indoor_outdoor(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Indoor-to-outdoor navigation"""
        path = "/api/indoor/navigate/outdoor"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_jobs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/jobs"""
        path = "/api/jobs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_jobs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/jobs"""
        path = "/api/jobs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/jobs/{id}"""
        path = f"/api/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/jobs/{id}"""
        path = f"/api/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_layers(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/layers"""
        path = "/api/layers"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_layers(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/layers"""
        path = "/api/layers"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_layers_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/layers/{id}"""
        path = f"/api/layers/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_layers_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/layers/{id}"""
        path = f"/api/layers/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_layers_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/layers/{id}"""
        path = f"/api/layers/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_layers_id_archive(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/layers/{id}/archive"""
        path = f"/api/layers/{_quote_path_value(id)}/archive"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_layers_id_preview(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/layers/{id}/preview"""
        path = f"/api/layers/{_quote_path_value(id)}/preview"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_layers_id_publish(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/layers/{id}/publish"""
        path = f"/api/layers/{_quote_path_value(id)}/publish"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_layers_id_upload(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/layers/{id}/upload"""
        path = f"/api/layers/{_quote_path_value(id)}/upload"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_lti_well_known_jwks_json(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/lti/.well-known/jwks.json"""
        path = "/api/lti/.well-known/jwks.json"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_lti_deeplink(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/lti/deeplink"""
        path = "/api/lti/deeplink"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_lti_launch(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/lti/launch"""
        path = "/api/lti/launch"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_lti_login(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/lti/login"""
        path = "/api/lti/login"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def compute_curvature(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Terrain curvature analysis"""
        path = "/api/manifold/curvature"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_geodesic(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Geodesic shortest path on terrain"""
        path = "/api/manifold/geodesic"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_optimal_transport(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Optimal transport between distributions"""
        path = "/api/manifold/transport"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def publish_map(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Publish a map view"""
        path = "/api/maps/publish"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_published_maps(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List published maps"""
        path = "/api/maps/published"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def unpublish_map(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Unpublish a map"""
        path = f"/api/maps/published/{_quote_path_value(token)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def update_published_map_embed_config(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update published map embed configuration"""
        path = f"/api/maps/published/{_quote_path_value(token)}/embed-config"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def get_published_map_stats(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get published map view statistics"""
        path = f"/api/maps/published/{_quote_path_value(token)}/stats"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_marketplace_categories(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/marketplace/categories"""
        path = "/api/marketplace/categories"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_marketplace_featured(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/marketplace/featured"""
        path = "/api/marketplace/featured"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_marketplace_items(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/marketplace/items"""
        path = "/api/marketplace/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_marketplace_items(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/marketplace/items"""
        path = "/api/marketplace/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_marketplace_items_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/marketplace/items/{id}"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_marketplace_items_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/marketplace/items/{id}"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_marketplace_items_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/marketplace/items/{id}"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_marketplace_items_id_download(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/marketplace/items/{id}/download"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}/download"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_marketplace_items_id_purchase(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/marketplace/items/{id}/purchase"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}/purchase"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_marketplace_items_id_reviews(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/marketplace/items/{id}/reviews"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}/reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_marketplace_items_id_reviews(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/marketplace/items/{id}/reviews"""
        path = f"/api/marketplace/items/{_quote_path_value(id)}/reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_notifications(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/notifications"""
        path = "/api/notifications"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_notifications_events(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/notifications/events"""
        path = "/api/notifications/events"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_notifications_mentions(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/notifications/mentions"""
        path = "/api/notifications/mentions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_notifications_mentions_read_all(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/notifications/mentions/read-all"""
        path = "/api/notifications/mentions/read-all"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_notifications_mentions_unread_count(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/notifications/mentions/unread-count"""
        path = "/api/notifications/mentions/unread-count"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_notifications_mentions_id_read(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/notifications/mentions/{id}/read"""
        path = f"/api/notifications/mentions/{_quote_path_value(id)}/read"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_notifications_read_all(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/notifications/read-all"""
        path = "/api/notifications/read-all"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_notifications_settings(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/notifications/settings"""
        path = "/api/notifications/settings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_notifications_settings(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/notifications/settings"""
        path = "/api/notifications/settings"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_notifications_test(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/notifications/test"""
        path = "/api/notifications/test"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_notifications_unread_count(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/notifications/unread-count"""
        path = "/api/notifications/unread-count"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_notifications_id_read(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/notifications/{id}/read"""
        path = f"/api/notifications/{_quote_path_value(id)}/read"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_observations_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/observations/{id}"""
        path = f"/api/observations/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_observations_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/observations/{id}"""
        path = f"/api/observations/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_observation_attachments(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List observation attachments"""
        path = f"/api/observations/{_quote_path_value(id)}/attachments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def upload_observation_attachment(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Upload observation attachment"""
        path = f"/api/observations/{_quote_path_value(id)}/attachments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_observations_id_sync(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/observations/{id}/sync"""
        path = f"/api/observations/{_quote_path_value(id)}/sync"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def get_open_api_spec(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """OpenAPI specification"""
        path = "/api/openapi.yaml"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_operations(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List available processing operations"""
        path = "/api/operations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_orgs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/orgs"""
        path = "/api/orgs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_orgs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/orgs"""
        path = "/api/orgs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_orgs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/orgs/{id}"""
        path = f"/api/orgs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_orgs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/orgs/{id}"""
        path = f"/api/orgs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_orgs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/orgs/{id}"""
        path = f"/api/orgs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_orgs_id_members(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/orgs/{id}/members"""
        path = f"/api/orgs/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_orgs_id_members(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/orgs/{id}/members"""
        path = f"/api/orgs/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_orgs_id_members_uid(self, id: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/orgs/{id}/members/{uid}"""
        path = f"/api/orgs/{_quote_path_value(id)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_orgs_id_members_uid(self, id: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/orgs/{id}/members/{uid}"""
        path = f"/api/orgs/{_quote_path_value(id)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_orgs_id_teams(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/orgs/{id}/teams"""
        path = f"/api/orgs/{_quote_path_value(id)}/teams"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_orgs_id_teams(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/orgs/{id}/teams"""
        path = f"/api/orgs/{_quote_path_value(id)}/teams"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_orgs_id_teams_tid(self, id: str, tid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/orgs/{id}/teams/{tid}"""
        path = f"/api/orgs/{_quote_path_value(id)}/teams/{_quote_path_value(tid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_orgs_id_teams_tid(self, id: str, tid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/orgs/{id}/teams/{tid}"""
        path = f"/api/orgs/{_quote_path_value(id)}/teams/{_quote_path_value(tid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_orgs_id_teams_tid_members(self, id: str, tid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/orgs/{id}/teams/{tid}/members"""
        path = f"/api/orgs/{_quote_path_value(id)}/teams/{_quote_path_value(tid)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_orgs_id_teams_tid_members_uid(self, id: str, tid: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/orgs/{id}/teams/{tid}/members/{uid}"""
        path = f"/api/orgs/{_quote_path_value(id)}/teams/{_quote_path_value(tid)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_ownership_transfers(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/ownership-transfers"""
        path = "/api/ownership-transfers"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_ownership_transfers_pending(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/ownership-transfers/pending"""
        path = "/api/ownership-transfers/pending"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_ownership_transfers_sent(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/ownership-transfers/sent"""
        path = "/api/ownership-transfers/sent"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_ownership_transfers_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/ownership-transfers/{id}"""
        path = f"/api/ownership-transfers/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_ownership_transfers_id_accept(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/ownership-transfers/{id}/accept"""
        path = f"/api/ownership-transfers/{_quote_path_value(id)}/accept"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_ownership_transfers_id_cancel(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/ownership-transfers/{id}/cancel"""
        path = f"/api/ownership-transfers/{_quote_path_value(id)}/cancel"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_ownership_transfers_id_reject(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/ownership-transfers/{id}/reject"""
        path = f"/api/ownership-transfers/{_quote_path_value(id)}/reject"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_peer_reviews_my_assignments(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/peer-reviews/my-assignments"""
        path = "/api/peer-reviews/my-assignments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_peer_reviews_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/peer-reviews/{id}"""
        path = f"/api/peer-reviews/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_peer_reviews_id_complete(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/peer-reviews/{id}/complete"""
        path = f"/api/peer-reviews/{_quote_path_value(id)}/complete"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_permissions(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/permissions"""
        path = "/api/permissions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_permissions(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/permissions"""
        path = "/api/permissions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_permissions_check(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/permissions/check"""
        path = "/api/permissions/check"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_permissions_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/permissions/{id}"""
        path = f"/api/permissions/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_pipeline(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/pipeline"""
        path = "/api/pipeline"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_plagiarism_reports_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/plagiarism-reports/{id}"""
        path = f"/api/plagiarism-reports/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_plagiarism_reports_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/plagiarism-reports/{id}"""
        path = f"/api/plagiarism-reports/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_plagiarism_reports_id_flag(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/plagiarism-reports/{id}/flag"""
        path = f"/api/plagiarism-reports/{_quote_path_value(id)}/flag"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def list_plugins(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List installed plugins"""
        path = "/api/plugins"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def plugin_catalog(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Browse available plugins"""
        path = "/api/plugins/catalog"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def install_plugin(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Install a plugin"""
        path = "/api/plugins/install"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_plugins_installed(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/plugins/installed"""
        path = "/api/plugins/installed"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_plugin_manifest(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get plugin manifest"""
        path = f"/api/plugins/local/{_quote_path_value(name)}/manifest"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def toggle_plugin(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Enable or disable a plugin"""
        path = f"/api/plugins/local/{_quote_path_value(name)}/toggle"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_plugins_marketplace(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/plugins/marketplace"""
        path = "/api/plugins/marketplace"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_plugins_marketplace(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/plugins/marketplace"""
        path = "/api/plugins/marketplace"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_plugins_marketplace_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/plugins/marketplace/{id}"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_plugins_marketplace_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/plugins/marketplace/{id}"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_plugins_marketplace_id_config(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/plugins/marketplace/{id}/config"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/config"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_plugins_marketplace_id_execute(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/plugins/marketplace/{id}/execute"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/execute"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_plugins_marketplace_id_install(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/plugins/marketplace/{id}/install"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/install"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_plugins_marketplace_id_install(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/plugins/marketplace/{id}/install"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/install"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_plugins_marketplace_id_publish(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/plugins/marketplace/{id}/publish"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/publish"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_plugins_marketplace_id_reviews(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/plugins/marketplace/{id}/reviews"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_plugins_marketplace_id_reviews(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/plugins/marketplace/{id}/reviews"""
        path = f"/api/plugins/marketplace/{_quote_path_value(id)}/reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_plugins_registry(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/plugins/registry"""
        path = "/api/plugins/registry"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_plugins_registry_install(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/plugins/registry/install"""
        path = "/api/plugins/registry/install"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_posts_post_id(self, postId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/posts/{postId}"""
        path = f"/api/posts/{_quote_path_value(postId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_posts_post_id(self, postId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/posts/{postId}"""
        path = f"/api/posts/{_quote_path_value(postId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_posts_post_id_pin(self, postId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/posts/{postId}/pin"""
        path = f"/api/posts/{_quote_path_value(postId)}/pin"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_posts_post_id_replies(self, postId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/posts/{postId}/replies"""
        path = f"/api/posts/{_quote_path_value(postId)}/replies"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_preference(self, key: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a user preference"""
        path = f"/api/preferences/{_quote_path_value(key)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def set_preference(self, key: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Set a user preference"""
        path = f"/api/preferences/{_quote_path_value(key)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def process_dataset(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Run spatial processing operation"""
        path = "/api/process"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_process_jobs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/process/jobs"""
        path = "/api/process/jobs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_process_jobs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/process/jobs"""
        path = "/api/process/jobs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_process_jobs_batch(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/process/jobs/batch"""
        path = "/api/process/jobs/batch"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_process_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/process/jobs/{id}"""
        path = f"/api/process/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_process_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/process/jobs/{id}"""
        path = f"/api/process/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_process_jobs_id_artifacts_format(self, id: str, format: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/process/jobs/{id}/artifacts/{format}"""
        path = f"/api/process/jobs/{_quote_path_value(id)}/artifacts/{_quote_path_value(format)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_process_jobs_id_rerun(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/process/jobs/{id}/rerun"""
        path = f"/api/process/jobs/{_quote_path_value(id)}/rerun"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_process_preflight(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/process/preflight"""
        path = "/api/process/preflight"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_projects(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List projects for current user"""
        path = "/api/projects"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_project(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a new project"""
        path = "/api/projects"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_project(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get project details"""
        path = f"/api/projects/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_project(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update project"""
        path = f"/api/projects/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_project(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete project"""
        path = f"/api/projects/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_project_datasets(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List datasets in project"""
        path = f"/api/projects/{_quote_path_value(id)}/datasets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def add_project_dataset(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Add dataset to project"""
        path = f"/api/projects/{_quote_path_value(id)}/datasets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def remove_project_dataset(self, id: str, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Remove dataset from project"""
        path = f"/api/projects/{_quote_path_value(id)}/datasets/{_quote_path_value(name)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_project_members(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List project members"""
        path = f"/api/projects/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def add_project_member(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Add member to project"""
        path = f"/api/projects/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def remove_project_member(self, id: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Remove member from project"""
        path = f"/api/projects/{_quote_path_value(id)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_projects_project_id_annotations(self, projectId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/projects/{projectId}/annotations"""
        path = f"/api/projects/{_quote_path_value(projectId)}/annotations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_projects_project_id_annotations(self, projectId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/projects/{projectId}/annotations"""
        path = f"/api/projects/{_quote_path_value(projectId)}/annotations"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_query_history(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get query history"""
        path = "/api/queries/history"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_saved_queries(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List saved queries"""
        path = "/api/queries/saved"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def save_query(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Save a query"""
        path = "/api/queries/saved"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def delete_saved_query(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a saved query"""
        path = f"/api/queries/saved/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def post_api_query_sql(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Execute SQL query against GeoParquet datasets"""
        path = "/api/query/sql"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_api_query_sql_datasets(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List parquet/spatial datasets available to the tenant"""
        path = "/api/query/sql/datasets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_api_query_sql_info(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """DuckDB engine status and capabilities"""
        path = "/api/query/sql/info"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_quizzes(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/quizzes"""
        path = "/api/quizzes"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_quizzes_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/quizzes/{id}"""
        path = f"/api/quizzes/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_quizzes_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/quizzes/{id}"""
        path = f"/api/quizzes/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_quizzes_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/quizzes/{id}"""
        path = f"/api/quizzes/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_quizzes_id_questions(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/quizzes/{id}/questions"""
        path = f"/api/quizzes/{_quote_path_value(id)}/questions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_quizzes_id_questions_qid(self, id: str, qid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/quizzes/{id}/questions/{qid}"""
        path = f"/api/quizzes/{_quote_path_value(id)}/questions/{_quote_path_value(qid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_quizzes_id_questions_qid(self, id: str, qid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/quizzes/{id}/questions/{qid}"""
        path = f"/api/quizzes/{_quote_path_value(id)}/questions/{_quote_path_value(qid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_raster_kde(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/raster/kde"""
        path = "/api/raster/kde"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_raster_mosaic(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/raster/mosaic"""
        path = "/api/raster/mosaic"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_raster_mosaic_info(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/raster/mosaic/info"""
        path = "/api/raster/mosaic/info"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_raster_process(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/raster/process"""
        path = "/api/raster/process"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_records(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/records"""
        path = "/api/records"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_records_conformance(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/records/conformance"""
        path = "/api/records/conformance"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_relationships(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/relationships"""
        path = "/api/relationships"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_relationships(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/relationships"""
        path = "/api/relationships"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_relationships_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/relationships/{id}"""
        path = f"/api/relationships/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_relationships_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/relationships/{id}"""
        path = f"/api/relationships/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_relationships_id_links(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/relationships/{id}/links"""
        path = f"/api/relationships/{_quote_path_value(id)}/links"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_relationships_id_links_fid(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/relationships/{id}/links/{fid}"""
        path = f"/api/relationships/{_quote_path_value(id)}/links/{_quote_path_value(fid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_relationships_id_links_oid_did(self, id: str, oid: str, did: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/relationships/{id}/links/{oid}/{did}"""
        path = f"/api/relationships/{_quote_path_value(id)}/links/{_quote_path_value(oid)}/{_quote_path_value(did)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_resource_comments_comment_id(self, commentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/resource-comments/{commentId}"""
        path = f"/api/resource-comments/{_quote_path_value(commentId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_resource_comments_comment_id(self, commentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/resource-comments/{commentId}"""
        path = f"/api/resource-comments/{_quote_path_value(commentId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_resource_comments_comment_id_replies(self, commentId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/resource-comments/{commentId}/replies"""
        path = f"/api/resource-comments/{_quote_path_value(commentId)}/replies"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_resources_type_id_comments(self, type: str, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/resources/{type}/{id}/comments"""
        path = f"/api/resources/{_quote_path_value(type)}/{_quote_path_value(id)}/comments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_resources_type_id_comments(self, type: str, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/resources/{type}/{id}/comments"""
        path = f"/api/resources/{_quote_path_value(type)}/{_quote_path_value(id)}/comments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_route(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute route between waypoints"""
        path = "/api/route"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_isochrone(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute isochrone polygons"""
        path = "/api/route/isochrone"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_route_matrix(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute origin-destination matrix"""
        path = "/api/route/matrix"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_service_area(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute distance-based service area polygons"""
        path = "/api/route/service-area"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_rubrics_rubric_id_criteria(self, rubricId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/rubrics/{rubricId}/criteria"""
        path = f"/api/rubrics/{_quote_path_value(rubricId)}/criteria"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_rubrics_rubric_id_criteria_criterion_id(self, rubricId: str, criterionId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/rubrics/{rubricId}/criteria/{criterionId}"""
        path = f"/api/rubrics/{_quote_path_value(rubricId)}/criteria/{_quote_path_value(criterionId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_rubrics_rubric_id_criteria_criterion_id(self, rubricId: str, criterionId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/rubrics/{rubricId}/criteria/{criterionId}"""
        path = f"/api/rubrics/{_quote_path_value(rubricId)}/criteria/{_quote_path_value(criterionId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_search(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/search"""
        path = "/api/search"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_share(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/share"""
        path = "/api/share"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_share_links(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/share/links"""
        path = "/api/share/links"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_share_links_token(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/share/links/{token}"""
        path = f"/api/share/links/{_quote_path_value(token)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_share_links_type_id(self, type: str, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/share/links/{type}/{id}"""
        path = f"/api/share/links/{_quote_path_value(type)}/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_share_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/share/{id}"""
        path = f"/api/share/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_share_type_id(self, type: str, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/share/{type}/{id}"""
        path = f"/api/share/{_quote_path_value(type)}/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def simulate_acoustic(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Acoustic ray tracing simulation"""
        path = "/api/simulation/acoustic"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def simulate_thermal(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Thermal diffusion simulation"""
        path = "/api/simulation/thermal"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def simulate_wind(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Lattice Boltzmann wind flow simulation"""
        path = "/api/simulation/wind"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_sql_query(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/sql/query"""
        path = "/api/sql/query"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_sql_tables(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/sql/tables"""
        path = "/api/sql/tables"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_sql_tables_schema_table_columns(self, schema: str, table: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/sql/tables/{schema}/{table}/columns"""
        path = f"/api/sql/tables/{_quote_path_value(schema)}/{_quote_path_value(table)}/columns"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_stac_credentials(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/stac/credentials"""
        path = "/api/stac/credentials"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_stac_credentials(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/stac/credentials"""
        path = "/api/stac/credentials"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def stac_import_asset(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Import STAC asset into local datasets"""
        path = "/api/stac/import"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def stac_remote_catalog(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Browse remote STAC catalog"""
        path = "/api/stac/remote"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_remote_collections(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Browse remote STAC collections"""
        path = "/api/stac/remote/collections"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_remote_items(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Browse remote STAC items for a collection"""
        path = "/api/stac/remote/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_stories(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List stories"""
        path = "/api/stories"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_story(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a story"""
        path = "/api/stories"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_story(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a story"""
        path = f"/api/stories/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_story(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update a story"""
        path = f"/api/stories/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_story(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a story"""
        path = f"/api/stories/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def list_story_members(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List story members"""
        path = f"/api/stories/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def add_story_member(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Add member to story (admin only)"""
        path = f"/api/stories/{_quote_path_value(id)}/members"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def remove_story_member(self, id: str, uid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Remove member from story (admin only)"""
        path = f"/api/stories/{_quote_path_value(id)}/members/{_quote_path_value(uid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def publish_story(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Publish a story (generate public token)"""
        path = f"/api/stories/{_quote_path_value(id)}/publish"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def list_slides(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List slides in a story"""
        path = f"/api/stories/{_quote_path_value(id)}/slides"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def add_slide(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Add a slide to a story"""
        path = f"/api/stories/{_quote_path_value(id)}/slides"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def reorder_slides(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Reorder slides in a story"""
        path = f"/api/stories/{_quote_path_value(id)}/slides/reorder"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def update_slide(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update a slide"""
        path = f"/api/stories/{_quote_path_value(id)}/slides/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_slide(self, id: str, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a slide"""
        path = f"/api/stories/{_quote_path_value(id)}/slides/{_quote_path_value(sid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_submissions_sid_rubric_scores(self, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/submissions/{sid}/rubric-scores"""
        path = f"/api/submissions/{_quote_path_value(sid)}/rubric-scores"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_submissions_sid_rubric_scores(self, sid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/submissions/{sid}/rubric-scores"""
        path = f"/api/submissions/{_quote_path_value(sid)}/rubric-scores"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_sync_diff(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/sync/diff"""
        path = "/api/sync/diff"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_sync_download(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/sync/download"""
        path = "/api/sync/download"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_sync_merge(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/sync/merge"""
        path = "/api/sync/merge"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_sync_status_collection_id(self, collection_id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/sync/status/{collection_id}"""
        path = f"/api/sync/status/{_quote_path_value(collection_id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_sync_upload(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/sync/upload"""
        path = "/api/sync/upload"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_templates(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/templates"""
        path = "/api/templates"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_templates(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/templates"""
        path = "/api/templates"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_templates_slug(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/templates/{slug}"""
        path = f"/api/templates/{_quote_path_value(slug)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_templates_slug_create_project(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/templates/{slug}/create-project"""
        path = f"/api/templates/{_quote_path_value(slug)}/create-project"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_bottleneck_distance(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Bottleneck distance between persistence diagrams"""
        path = "/api/topology/bottleneck"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_persistent_homology(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute persistent homology"""
        path = "/api/topology/homology"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_spatiotemporal(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Track topological evolution over time"""
        path = "/api/topology/spatiotemporal"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def compute_wasserstein_distance(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Wasserstein distance between persistence diagrams"""
        path = "/api/topology/wasserstein"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_users_autocomplete(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/users/autocomplete"""
        path = "/api/users/autocomplete"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_vcs_branches(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/vcs/branches"""
        path = "/api/vcs/branches"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_branches(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/branches"""
        path = "/api/vcs/branches"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_branches_switch(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/branches/switch"""
        path = "/api/vcs/branches/switch"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_vcs_branches_name(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/vcs/branches/{name}"""
        path = f"/api/vcs/branches/{_quote_path_value(name)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def vcs_commit(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Commit current state of a dataset"""
        path = "/api/vcs/commit"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def vcs_diff(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Show diff between VCS commits"""
        path = "/api/vcs/diff"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def vcs_init(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Initialize spatial version control for a dataset"""
        path = "/api/vcs/init"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def vcs_log(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """View version history"""
        path = "/api/vcs/log"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_vcs_log_dataset_name(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/vcs/log/dataset/{name}"""
        path = f"/api/vcs/log/dataset/{_quote_path_value(name)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_vcs_prs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/vcs/prs"""
        path = "/api/vcs/prs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_prs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/prs"""
        path = "/api/vcs/prs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_vcs_prs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/vcs/prs/{id}"""
        path = f"/api/vcs/prs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_prs_id_close(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/prs/{id}/close"""
        path = f"/api/vcs/prs/{_quote_path_value(id)}/close"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_prs_id_comments(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/prs/{id}/comments"""
        path = f"/api/vcs/prs/{_quote_path_value(id)}/comments"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_vcs_prs_id_conflicts(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/vcs/prs/{id}/conflicts"""
        path = f"/api/vcs/prs/{_quote_path_value(id)}/conflicts"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_prs_id_merge(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/prs/{id}/merge"""
        path = f"/api/vcs/prs/{_quote_path_value(id)}/merge"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_prs_id_reviews(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/prs/{id}/reviews"""
        path = f"/api/vcs/prs/{_quote_path_value(id)}/reviews"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_vcs_tags(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/vcs/tags"""
        path = "/api/vcs/tags"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_vcs_tags(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/vcs/tags"""
        path = "/api/vcs/tags"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_vcs_tags_name(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/vcs/tags/{name}"""
        path = f"/api/vcs/tags/{_quote_path_value(name)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_watch_resource_type_resource_id(self, resourceType: str, resourceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/watch/{resourceType}/{resourceId}"""
        path = f"/api/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_watch_resource_type_resource_id(self, resourceType: str, resourceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/watch/{resourceType}/{resourceId}"""
        path = f"/api/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_watch_resource_type_resource_id(self, resourceType: str, resourceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/watch/{resourceType}/{resourceId}"""
        path = f"/api/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_watch_resource_type_resource_id_watchers(self, resourceType: str, resourceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/watch/{resourceType}/{resourceId}/watchers"""
        path = f"/api/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}/watchers"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_watches(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/watches"""
        path = "/api/watches"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_webhooks(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List webhooks"""
        path = "/api/webhooks"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def create_webhook(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a webhook"""
        path = "/api/webhooks"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def update_webhook(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update a webhook (admin only)"""
        path = f"/api/webhooks/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_webhook(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a webhook (admin only)"""
        path = f"/api/webhooks/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_webhooks_id_deliveries(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/webhooks/{id}/deliveries"""
        path = f"/api/webhooks/{_quote_path_value(id)}/deliveries"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_webhooks_id_regenerate(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/webhooks/{id}/regenerate"""
        path = f"/api/webhooks/{_quote_path_value(id)}/regenerate"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def test_webhook(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Send a test event to a webhook (admin only)"""
        path = f"/api/webhooks/{_quote_path_value(id)}/test"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_whitelabel(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/whitelabel"""
        path = "/api/whitelabel"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_collections(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List feature collections"""
        path = "/collections"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_collection(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a single collection"""
        path = f"/collections/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_features(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get features from a collection"""
        path = f"/collections/{_quote_path_value(id)}/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_collections_id_items(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /collections/{id}/items"""
        path = f"/collections/{_quote_path_value(id)}/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_collections_id_items_fid(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /collections/{id}/items/{fid}"""
        path = f"/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def update_feature(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Update a feature"""
        path = f"/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def delete_feature(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a feature"""
        path = f"/collections/{_quote_path_value(id)}/items/{_quote_path_value(fid)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def get_queryables(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get queryable properties for a collection"""
        path = f"/collections/{_quote_path_value(id)}/queryables"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_conformance(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Conformance declaration"""
        path = "/conformance"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def list_datasets(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List registered datasets"""
        path = "/datasets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def register_dataset(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Register a new dataset"""
        path = "/datasets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def delete_dataset(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Delete a dataset"""
        path = f"/datasets/{_quote_path_value(name)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def graphql_get(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """GraphQL query via GET"""
        path = "/graphql"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def graphql_post(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """GraphQL query/mutation"""
        path = "/graphql"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_graphql_playground(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /graphql/playground"""
        path = "/graphql/playground"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_health(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Health check"""
        path = "/health"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_manifest_json(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /manifest.json"""
        path = "/manifest.json"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_metrics(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Prometheus metrics"""
        path = "/metrics"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_pm_tiles_metadata(self, archive: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get PMTiles archive metadata"""
        path = f"/pmtiles/{_quote_path_value(archive)}/metadata"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_pm_tile(self, archive: str, z: str, x: str, y: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a tile from a PMTiles archive"""
        path = f"/pmtiles/{_quote_path_value(archive)}/{_quote_path_value(z)}/{_quote_path_value(x)}/{_quote_path_value(y)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_public_map(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a published map (no auth required)"""
        path = f"/public/maps/{_quote_path_value(token)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_public_story(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a published story (no auth required)"""
        path = f"/public/stories/{_quote_path_value(token)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def raster_band_math(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Apply band math expression"""
        path = f"/raster/{_quote_path_value(name)}/band-math"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_raster_name_cog(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /raster/{name}/cog"""
        path = f"/raster/{_quote_path_value(name)}/cog"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_raster_name_cog_info(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /raster/{name}/cog/info"""
        path = f"/raster/{_quote_path_value(name)}/cog/info"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_raster_name_cog_tile_z_x_y(self, name: str, z: str, x: str, y: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /raster/{name}/cog/tile/{z}/{x}/{y}"""
        path = f"/raster/{_quote_path_value(name)}/cog/tile/{_quote_path_value(z)}/{_quote_path_value(x)}/{_quote_path_value(y)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_raster_name_contour(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/contour"""
        path = f"/raster/{_quote_path_value(name)}/contour"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_raster_dimensions(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get raster multidimensional coordinate metadata"""
        path = f"/raster/{_quote_path_value(name)}/dimensions"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def export_raster_band(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Export a raster band as GeoTIFF under the configured export directory"""
        path = f"/raster/{_quote_path_value(name)}/export"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def raster_hillshade(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Generate hillshade from raster"""
        path = f"/raster/{_quote_path_value(name)}/hillshade"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_raster_histogram(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get sampled histogram/statistics for a raster band"""
        path = f"/raster/{_quote_path_value(name)}/histogram"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_raster_info(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get raster dataset info"""
        path = f"/raster/{_quote_path_value(name)}/info"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def raster_ndvi(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Compute NDVI from raster bands"""
        path = f"/raster/{_quote_path_value(name)}/ndvi"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_raster_name_profile(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/profile"""
        path = f"/raster/{_quote_path_value(name)}/profile"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_raster_stats(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get raster band statistics"""
        path = f"/raster/{_quote_path_value(name)}/stats"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_raster_tile(self, name: str, z: str, x: str, y: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a raster tile"""
        path = f"/raster/{_quote_path_value(name)}/tiles/{_quote_path_value(z)}/{_quote_path_value(x)}/{_quote_path_value(y)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_raster_name_values(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /raster/{name}/values"""
        path = f"/raster/{_quote_path_value(name)}/values"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_raster_name_viewshed(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/viewshed"""
        path = f"/raster/{_quote_path_value(name)}/viewshed"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_raster_name_zonal_stats(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/zonal-stats"""
        path = f"/raster/{_quote_path_value(name)}/zonal-stats"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_s_token(self, token: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /s/{token}"""
        path = f"/s/{_quote_path_value(token)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_saml_acs(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /saml/acs"""
        path = "/saml/acs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_saml_login(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /saml/login"""
        path = "/saml/login"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_saml_logout(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /saml/logout"""
        path = "/saml/logout"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_saml_metadata(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /saml/metadata"""
        path = "/saml/metadata"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_root(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """STAC catalog root"""
        path = "/stac"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_list_collections(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List STAC collections"""
        path = "/stac/collections"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_get_collection(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a STAC collection"""
        path = f"/stac/collections/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_list_items(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """List STAC items in a collection"""
        path = f"/stac/collections/{_quote_path_value(id)}/items"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_stac_queryables(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /stac/queryables"""
        path = "/stac/queryables"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def stac_search(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """STAC search"""
        path = "/stac/search"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_stac_search(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /stac/search"""
        path = "/stac/search"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def get_vector_tile(self, tileset: str, z: str, x: str, y: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a vector tile"""
        path = f"/tiles/{_quote_path_value(tileset)}/{_quote_path_value(z)}/{_quote_path_value(x)}/{_quote_path_value(y)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def upload_dataset(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Upload a geospatial file"""
        path = "/upload"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def wfs_get(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """WFS 2.0.0 GetCapabilities (GET binding)"""
        path = "/wfs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def wfs_post(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """WFS 2.0.0 POST binding"""
        path = "/wfs"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_wms(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /wms"""
        path = "/wms"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_wmts(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /wmts"""
        path = "/wmts"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_wmts_tilematrixset_layer_z_x_y(self, tilematrixset: str, layer: str, z: str, x: str, y: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /wmts/{tilematrixset}/{layer}/{z}/{x}/{y}"""
        path = f"/wmts/{_quote_path_value(tilematrixset)}/{_quote_path_value(layer)}/{_quote_path_value(z)}/{_quote_path_value(x)}/{_quote_path_value(y)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def collaborate(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """WebSocket endpoint for real-time collaboration"""
        path = "/ws/collaborate"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_ws_jobs_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /ws/jobs/{id}"""
        path = f"/ws/jobs/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

