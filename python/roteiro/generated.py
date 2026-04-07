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

    def auto_get_api_3dtiles(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/3dtiles"""
        path = "/api/v1/3dtiles"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_3dtiles_dataset_tileset_json(self, dataset: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/3dtiles/{dataset}/tileset.json"""
        path = f"/api/v1/3dtiles/{_quote_path_value(dataset)}/tileset.json"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_3dtiles_dataset_path(self, dataset: str, path: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/3dtiles/{dataset}/{path...}"""
        path = f"/api/v1/3dtiles/{_quote_path_value(dataset)}/{_quote_path_value(path)}"
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
        """[auto] GET /api/v1/activity"""
        path = "/api/v1/activity"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_backup(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/admin/backup"""
        path = "/api/v1/admin/backup"
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
        """[auto] GET /api/v1/admin/backup/status"""
        path = "/api/v1/admin/backup/status"
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
        """[auto] GET /api/v1/admin/backups"""
        path = "/api/v1/admin/backups"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_billing_tenants(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/admin/billing/tenants"""
        path = "/api/v1/admin/billing/tenants"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_billing_tenants_id(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/admin/billing/tenants/{id}"""
        path = f"/api/v1/admin/billing/tenants/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_admin_billing_tenants_id_reconcile(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/admin/billing/tenants/{id}/reconcile"""
        path = f"/api/v1/admin/billing/tenants/{_quote_path_value(id)}/reconcile"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_admin_dr_config(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/admin/dr/config"""
        path = "/api/v1/admin/dr/config"
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
        """[auto] PUT /api/v1/admin/dr/config"""
        path = "/api/v1/admin/dr/config"
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
        """[auto] GET /api/v1/admin/health"""
        path = "/api/v1/admin/health"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_admin_onboarding_analytics(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Onboarding funnel analytics (admin only)"""
        path = "/api/v1/admin/onboarding-analytics"
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
        """[auto] POST /api/v1/admin/restore"""
        path = "/api/v1/admin/restore"
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
        """[auto] GET /api/v1/admin/stats"""
        path = "/api/v1/admin/stats"
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
        """[auto] GET /api/v1/admin/usage"""
        path = "/api/v1/admin/usage"
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
        path = "/api/v1/admin/users"
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
        path = f"/api/v1/admin/users/{_quote_path_value(id)}"
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
        path = f"/api/v1/admin/users/{_quote_path_value(id)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def record_onboarding_analytics_event(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Record onboarding analytics event"""
        path = "/api/v1/analytics/events"
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
        """[auto] GET /api/v1/annotations/{id}"""
        path = f"/api/v1/annotations/{_quote_path_value(id)}"
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
        """[auto] DELETE /api/v1/annotations/{id}"""
        path = f"/api/v1/annotations/{_quote_path_value(id)}"
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
        """[auto] PUT /api/v1/annotations/{id}/resolve"""
        path = f"/api/v1/annotations/{_quote_path_value(id)}/resolve"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_attachments_aid(self, aid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/attachments/{aid}"""
        path = f"/api/v1/attachments/{_quote_path_value(aid)}"
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
        """[auto] DELETE /api/v1/attachments/{aid}"""
        path = f"/api/v1/attachments/{_quote_path_value(aid)}"
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
        """[auto] GET /api/v1/attachments/{aid}/thumbnail"""
        path = f"/api/v1/attachments/{_quote_path_value(aid)}/thumbnail"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def disable_two_factor(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Disable two-factor authentication"""
        path = "/api/v1/auth/2fa/disable"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def enable_two_factor(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Enable two-factor authentication"""
        path = "/api/v1/auth/2fa/enable"
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
        path = "/api/v1/auth/api-keys"
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
        path = "/api/v1/auth/api-keys"
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
        path = f"/api/v1/auth/api-keys/{_quote_path_value(id)}"
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
        """Send a password reset email"""
        path = "/api/v1/auth/forgot-password"
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
        """[auto] PUT /api/v1/auth/locale"""
        path = "/api/v1/auth/locale"
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
        path = "/api/v1/auth/login"
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
        path = "/api/v1/auth/logout"
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
        path = "/api/v1/auth/me"
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
        path = "/api/v1/auth/profile"
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
        path = "/api/v1/auth/register"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def resend_verification_email(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Resend verification email"""
        path = "/api/v1/auth/resend-verification"
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
        path = "/api/v1/auth/reset-password"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def verify_two_factor(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Complete login with a 2FA code"""
        path = "/api/v1/auth/verify-2fa"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def verify_email(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Verify an email address with a token"""
        path = "/api/v1/auth/verify-email"
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
        """[auto] POST /api/v1/billing/academic-verify"""
        path = "/api/v1/billing/academic-verify"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_billing_checkout(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/billing/checkout"""
        path = "/api/v1/billing/checkout"
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
        """[auto] GET /api/v1/billing/invoices"""
        path = "/api/v1/billing/invoices"
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
        path = "/api/v1/billing/plan"
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
        path = "/api/v1/billing/plans"
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
        """[auto] POST /api/v1/billing/portal"""
        path = "/api/v1/billing/portal"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_billing_quote(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/billing/quote"""
        path = "/api/v1/billing/quote"
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
        """[auto] GET /api/v1/billing/status"""
        path = "/api/v1/billing/status"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def get_billing_usage(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get current billing period usage"""
        path = "/api/v1/billing/usage"
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
        """[auto] GET /api/v1/billing/usage/history"""
        path = "/api/v1/billing/usage/history"
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
        """[auto] POST /api/v1/billing/webhook"""
        path = "/api/v1/billing/webhook"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_bodies(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/bodies"""
        path = "/api/v1/bodies"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_bodies(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/bodies"""
        path = "/api/v1/bodies"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_bodies_slug(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/bodies/{slug}"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_put_api_bodies_slug(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] PUT /api/v1/bodies/{slug}"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('PUT', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_bodies_slug(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/v1/bodies/{slug}"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_bodies_slug_assets(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/bodies/{slug}/assets"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}/assets"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_delete_api_bodies_slug_assets_asset_id(self, slug: str, assetId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] DELETE /api/v1/bodies/{slug}/assets/{assetId}"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}/assets/{_quote_path_value(assetId)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('DELETE', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_bodies_slug_recipes(self, slug: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/bodies/{slug}/recipes"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}/recipes"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_bodies_slug_recipes_source_id_execute(self, slug: str, sourceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/bodies/{slug}/recipes/{sourceId}/execute"""
        path = f"/api/v1/bodies/{_quote_path_value(slug)}/recipes/{_quote_path_value(sourceId)}/execute"
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
        path = "/api/v1/bookmarks"
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
        path = "/api/v1/bookmarks"
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
        path = f"/api/v1/bookmarks/{_quote_path_value(id)}"
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
        """[auto] DELETE /api/v1/bulk/delete"""
        path = "/api/v1/bulk/delete"
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
        """[auto] POST /api/v1/bulk/export"""
        path = "/api/v1/bulk/export"
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
        """[auto] POST /api/v1/bulk/import"""
        path = "/api/v1/bulk/import"
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
        """[auto] POST /api/v1/bulk/update"""
        path = "/api/v1/bulk/update"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_terrain_cutfill(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/terrain/cutfill"""
        path = "/api/v1/terrain/cutfill"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_terrain_los(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/terrain/los"""
        path = "/api/v1/terrain/los"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_api_terrain_viewshed(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /api/v1/terrain/viewshed"""
        path = "/api/v1/terrain/viewshed"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_users_search(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/users/search"""
        path = "/api/v1/users/search"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_watch_resource_type_resource_id(self, resourceType: str, resourceId: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/watch/{resourceType}/{resourceId}"""
        path = f"/api/v1/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}"
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
        """[auto] POST /api/v1/watch/{resourceType}/{resourceId}"""
        path = f"/api/v1/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}"
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
        """[auto] DELETE /api/v1/watch/{resourceType}/{resourceId}"""
        path = f"/api/v1/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}"
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
        """[auto] GET /api/v1/watch/{resourceType}/{resourceId}/watchers"""
        path = f"/api/v1/watch/{_quote_path_value(resourceType)}/{_quote_path_value(resourceId)}/watchers"
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
        """[auto] GET /api/v1/watches"""
        path = "/api/v1/watches"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_api_whitelabel(self, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /api/v1/whitelabel"""
        path = "/api/v1/whitelabel"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

    def auto_get_assets_published_asset_id_r_revision_asset_path(self, assetId: str, revision: str, assetPath: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /assets/published/{assetId}/r/{revision}/{assetPath...}"""
        path = f"/assets/published/{_quote_path_value(assetId)}/r/{_quote_path_value(revision)}/{_quote_path_value(assetPath)}"
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

    def add_feature(self, id: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Create a feature in a collection"""
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

    def get_feature(self, id: str, fid: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get a single feature by id"""
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

    def auto_post_raster_name_aspect(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/aspect"""
        path = f"/raster/{_quote_path_value(name)}/aspect"
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

    def export_raster_selection(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Export a raster variable selection as GeoTIFF under the configured export directory"""
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

    def raster_expression(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Apply raster expression across named channel selections"""
        path = f"/raster/{_quote_path_value(name)}/expression"
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
        """Get sampled histogram/statistics for a raster variable selection"""
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
        """Compute NDVI from raster channel selections"""
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

    def auto_post_raster_name_reduce_operation(self, name: str, operation: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/reduce/{operation}"""
        path = f"/raster/{_quote_path_value(name)}/reduce/{_quote_path_value(operation)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('POST', path, body=payload, extra_headers=extra_headers)

    def auto_post_raster_name_slope(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] POST /raster/{name}/slope"""
        path = f"/raster/{_quote_path_value(name)}/slope"
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
        """Get raster variable statistics"""
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

    def get_raster_values(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """Get raw raster values for a variable selection"""
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

    def auto_get_raster_name_variables(self, name: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /raster/{name}/variables"""
        path = f"/raster/{_quote_path_value(name)}/variables"
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

    def auto_get_tiles_asset_asset_id_r_revision_z_x_tile_path(self, assetId: str, revision: str, z: str, x: str, tilePath: str, query: Optional[Dict[str, Any]] = None, body: Any = None, headers: Optional[Dict[str, str]] = None) -> Any:
        """[auto] GET /tiles/asset/{assetId}/r/{revision}/{z}/{x}/{tilePath...}"""
        path = f"/tiles/asset/{_quote_path_value(assetId)}/r/{_quote_path_value(revision)}/{_quote_path_value(z)}/{_quote_path_value(x)}/{_quote_path_value(tilePath)}"
        if query:
            q = urlencode({k: v for k, v in query.items() if v is not None})
            if q:
                path = f"{path}?{q}"
        extra_headers = dict(headers or {})
        payload = body
        if payload is not None and 'Content-Type' not in extra_headers:
            extra_headers['Content-Type'] = 'application/json'
        return self._client._request('GET', path, body=payload, extra_headers=extra_headers)

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

