/* AUTO-GENERATED FILE. DO NOT EDIT. */
import type { RoteiroClient } from './client';

export type GeneratedRequestOptions = {
  query?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
  headers?: Record<string, string>;
};

function withQuery(path: string, query?: GeneratedRequestOptions['query']): string {
  if (!query) return path;
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v === undefined || v === null) continue;
    sp.set(k, String(v));
  }
  const q = sp.toString();
  return q ? `${path}?${q}` : path;
}

export class RoteiroGeneratedApi {
  constructor(private readonly client: RoteiroClient) {}

  /** OGC API landing page */
  async getlandingpage(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/3dtiles */
  async autoGetApi3dtiles(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/3dtiles', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/3dtiles/{dataset}/tileset.json */
  async autoGetApi3dtilesDatasetTilesetJson(pathParams: { dataset: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/3dtiles/${encodeURIComponent(String(pathParams.dataset))}/tileset.json`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/3dtiles/{dataset}/{path...} */
  async autoGetApi3dtilesDatasetPath(pathParams: { dataset: string, path: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/3dtiles/${encodeURIComponent(String(pathParams.dataset))}/${encodeURIComponent(String(pathParams.path))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/activity */
  async autoGetApiActivity(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/activity', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/admin/backup */
  async autoPostApiAdminBackup(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/backup', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/backup/status */
  async autoGetApiAdminBackupStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/backup/status', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/backups */
  async autoGetApiAdminBackups(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/backups', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/billing/tenants */
  async autoGetApiAdminBillingTenants(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/billing/tenants', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/billing/tenants/{id} */
  async autoGetApiAdminBillingTenantsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/admin/billing/tenants/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/admin/billing/tenants/{id}/reconcile */
  async autoPostApiAdminBillingTenantsIdReconcile(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/admin/billing/tenants/${encodeURIComponent(String(pathParams.id))}/reconcile`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/dr/config */
  async autoGetApiAdminDrConfig(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/dr/config', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/v1/admin/dr/config */
  async autoPutApiAdminDrConfig(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/dr/config', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/health */
  async autoGetApiAdminHealth(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/health', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Onboarding funnel analytics (admin only) */
  async getadminonboardinganalytics(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/onboarding-analytics', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/admin/restore */
  async autoPostApiAdminRestore(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/restore', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/stats */
  async autoGetApiAdminStats(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/stats', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/admin/usage */
  async autoGetApiAdminUsage(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/usage', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List all users (admin only) */
  async listusers(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/admin/users', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update a user (admin only) */
  async updateuser(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/admin/users/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** Delete a user (admin only) */
  async deleteuser(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/admin/users/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** Record onboarding analytics event */
  async recordonboardinganalyticsevent(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/analytics/events', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/annotations/{id} */
  async autoGetApiAnnotationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/annotations/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/v1/annotations/{id} */
  async autoDeleteApiAnnotationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/annotations/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/v1/annotations/{id}/resolve */
  async autoPutApiAnnotationsIdResolve(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/annotations/${encodeURIComponent(String(pathParams.id))}/resolve`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/attachments/{aid} */
  async autoGetApiAttachmentsAid(pathParams: { aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/attachments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/v1/attachments/{aid} */
  async autoDeleteApiAttachmentsAid(pathParams: { aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/attachments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/attachments/{aid}/thumbnail */
  async autoGetApiAttachmentsAidThumbnail(pathParams: { aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/attachments/${encodeURIComponent(String(pathParams.aid))}/thumbnail`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Disable two-factor authentication */
  async disabletwofactor(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/2fa/disable', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Enable two-factor authentication */
  async enabletwofactor(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/2fa/enable', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** List API keys for authenticated user */
  async listapikeys(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/api-keys', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a new API key */
  async createapikey(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/api-keys', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Revoke an API key */
  async revokeapikey(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/auth/api-keys/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** Send a password reset email */
  async forgotpassword(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/forgot-password', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/v1/auth/locale */
  async autoPutApiAuthLocale(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/locale', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** Login with credentials */
  async login(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/login', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Logout current session */
  async logout(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/logout', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Get current user */
  async getcurrentuser(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/me', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update user profile */
  async updateprofile(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/profile', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** Register a new user */
  async registeruser(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/register', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Resend verification email */
  async resendverificationemail(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/resend-verification', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Reset password with token */
  async resetpassword(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/reset-password', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Complete login with a 2FA code */
  async verifytwofactor(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/verify-2fa', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Verify an email address with a token */
  async verifyemail(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/auth/verify-email', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/billing/academic-verify */
  async autoPostApiBillingAcademicVerify(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/academic-verify', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/billing/checkout */
  async autoPostApiBillingCheckout(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/checkout', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/billing/invoices */
  async autoGetApiBillingInvoices(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/invoices', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get current user's billing plan and usage */
  async getcurrentplan(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/plan', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List available plans */
  async listplans(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/plans', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/billing/portal */
  async autoPostApiBillingPortal(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/portal', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/billing/quote */
  async autoPostApiBillingQuote(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/quote', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/billing/status */
  async autoGetApiBillingStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/status', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get current billing period usage */
  async getbillingusage(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/usage', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/billing/usage/history */
  async autoGetApiBillingUsageHistory(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/usage/history', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/billing/webhook */
  async autoPostApiBillingWebhook(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/billing/webhook', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/bodies */
  async autoGetApiBodies(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bodies', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/bodies */
  async autoPostApiBodies(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bodies', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/bodies/{slug} */
  async autoGetApiBodiesSlug(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/v1/bodies/{slug} */
  async autoPutApiBodiesSlug(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/v1/bodies/{slug} */
  async autoDeleteApiBodiesSlug(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/bodies/{slug}/assets */
  async autoPostApiBodiesSlugAssets(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}/assets`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/v1/bodies/{slug}/assets/{assetId} */
  async autoDeleteApiBodiesSlugAssetsAssetId(pathParams: { slug: string, assetId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}/assets/${encodeURIComponent(String(pathParams.assetId))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/bodies/{slug}/recipes */
  async autoGetApiBodiesSlugRecipes(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}/recipes`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/bodies/{slug}/recipes/{sourceId}/execute */
  async autoPostApiBodiesSlugRecipesSourceIdExecute(pathParams: { slug: string, sourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bodies/${encodeURIComponent(String(pathParams.slug))}/recipes/${encodeURIComponent(String(pathParams.sourceId))}/execute`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** List spatial bookmarks */
  async listbookmarks(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bookmarks', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a bookmark */
  async createbookmark(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bookmarks', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Delete a bookmark */
  async deletebookmark(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/bookmarks/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/v1/bulk/delete */
  async autoDeleteApiBulkDelete(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bulk/delete', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/bulk/export */
  async autoPostApiBulkExport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bulk/export', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/bulk/import */
  async autoPostApiBulkImport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bulk/import', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/bulk/update */
  async autoPostApiBulkUpdate(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/bulk/update', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/terrain/cutfill */
  async autoPostApiTerrainCutfill(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/terrain/cutfill', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/terrain/los */
  async autoPostApiTerrainLos(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/terrain/los', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/terrain/viewshed */
  async autoPostApiTerrainViewshed(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/terrain/viewshed', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/users/search */
  async autoGetApiUsersSearch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/users/search', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/watch/{resourceType}/{resourceId} */
  async autoGetApiWatchResourceTypeResourceId(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/v1/watch/{resourceType}/{resourceId} */
  async autoPostApiWatchResourceTypeResourceId(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/v1/watch/{resourceType}/{resourceId} */
  async autoDeleteApiWatchResourceTypeResourceId(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/watch/{resourceType}/{resourceId}/watchers */
  async autoGetApiWatchResourceTypeResourceIdWatchers(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/v1/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}/watchers`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/watches */
  async autoGetApiWatches(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/watches', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/v1/whitelabel */
  async autoGetApiWhitelabel(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/v1/whitelabel', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /assets/published/{assetId}/r/{revision}/{assetPath...} */
  async autoGetAssetsPublishedAssetIdRRevisionAssetPath(pathParams: { assetId: string, revision: string, assetPath: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/assets/published/${encodeURIComponent(String(pathParams.assetId))}/r/${encodeURIComponent(String(pathParams.revision))}/${encodeURIComponent(String(pathParams.assetPath))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List feature collections */
  async getcollections(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/collections', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get a single collection */
  async getcollection(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get features from a collection */
  async getfeatures(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}/items`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a feature in a collection */
  async addfeature(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}/items`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Get a single feature by id */
  async getfeature(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update a feature */
  async updatefeature(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PUT',
      headers,
      body,
    });
  }

  /** Delete a feature */
  async deletefeature(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** Get queryable properties for a collection */
  async getqueryables(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/collections/${encodeURIComponent(String(pathParams.id))}/queryables`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Conformance declaration */
  async getconformance(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/conformance', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List registered datasets */
  async listdatasets(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/datasets', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Delete a dataset */
  async deletedataset(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/datasets/${encodeURIComponent(String(pathParams.name))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'DELETE',
      headers,
      body,
    });
  }

  /** Health check */
  async gethealth(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/health', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /manifest.json */
  async autoGetManifestJson(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/manifest.json', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Prometheus metrics */
  async getmetrics(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/metrics', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get PMTiles archive metadata */
  async getpmtilesmetadata(pathParams: { archive: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/pmtiles/${encodeURIComponent(String(pathParams.archive))}/metadata`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get a tile from a PMTiles archive */
  async getpmtile(pathParams: { archive: string, z: string, x: string, y: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/pmtiles/${encodeURIComponent(String(pathParams.archive))}/${encodeURIComponent(String(pathParams.z))}/${encodeURIComponent(String(pathParams.x))}/${encodeURIComponent(String(pathParams.y))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get a published map (no auth required) */
  async getpublicmap(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/public/maps/${encodeURIComponent(String(pathParams.token))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/aspect */
  async autoPostRasterNameAspect(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/aspect`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /raster/{name}/cog */
  async autoGetRasterNameCog(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/cog`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /raster/{name}/cog/info */
  async autoGetRasterNameCogInfo(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/cog/info`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /raster/{name}/cog/tile/{z}/{x}/{y} */
  async autoGetRasterNameCogTileZXY(pathParams: { name: string, z: string, x: string, y: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/cog/tile/${encodeURIComponent(String(pathParams.z))}/${encodeURIComponent(String(pathParams.x))}/${encodeURIComponent(String(pathParams.y))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/contour */
  async autoPostRasterNameContour(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/contour`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Get raster multidimensional coordinate metadata */
  async getrasterdimensions(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/dimensions`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Export a raster variable selection as GeoTIFF under the configured export directory */
  async exportrasterselection(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/export`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Apply raster expression across named channel selections */
  async rasterexpression(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/expression`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Generate hillshade from raster */
  async rasterhillshade(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/hillshade`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Get sampled histogram/statistics for a raster variable selection */
  async getrasterhistogram(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/histogram`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get raster dataset info */
  async getrasterinfo(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/info`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Compute NDVI from raster channel selections */
  async rasterndvi(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/ndvi`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/profile */
  async autoPostRasterNameProfile(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/profile`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/reduce/{operation} */
  async autoPostRasterNameReduceOperation(pathParams: { name: string, operation: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/reduce/${encodeURIComponent(String(pathParams.operation))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/slope */
  async autoPostRasterNameSlope(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/slope`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** Get raster variable statistics */
  async getrasterstats(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/stats`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get a raster tile */
  async getrastertile(pathParams: { name: string, z: string, x: string, y: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/tiles/${encodeURIComponent(String(pathParams.z))}/${encodeURIComponent(String(pathParams.x))}/${encodeURIComponent(String(pathParams.y))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get raw raster values for a variable selection */
  async getrastervalues(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/values`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /raster/{name}/variables */
  async autoGetRasterNameVariables(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/variables`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/viewshed */
  async autoPostRasterNameViewshed(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/viewshed`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] POST /raster/{name}/zonal-stats */
  async autoPostRasterNameZonalStats(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/zonal-stats`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /s/{token} */
  async autoGetSToken(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/s/${encodeURIComponent(String(pathParams.token))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /tiles/asset/{assetId}/r/{revision}/{z}/{x}/{tilePath...} */
  async autoGetTilesAssetAssetIdRRevisionZXTilePath(pathParams: { assetId: string, revision: string, z: string, x: string, tilePath: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/tiles/asset/${encodeURIComponent(String(pathParams.assetId))}/r/${encodeURIComponent(String(pathParams.revision))}/${encodeURIComponent(String(pathParams.z))}/${encodeURIComponent(String(pathParams.x))}/${encodeURIComponent(String(pathParams.tilePath))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get a vector tile */
  async getvectortile(pathParams: { tileset: string, z: string, x: string, y: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/tiles/${encodeURIComponent(String(pathParams.tileset))}/${encodeURIComponent(String(pathParams.z))}/${encodeURIComponent(String(pathParams.x))}/${encodeURIComponent(String(pathParams.y))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Upload a geospatial file */
  async uploaddataset(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/upload', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** WFS 2.0.0 GetCapabilities (GET binding) */
  async wfsget(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/wfs', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** WFS 2.0.0 POST binding */
  async wfspost(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/wfs', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'POST',
      headers,
      body,
    });
  }

  /** [auto] GET /wms */
  async autoGetWms(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/wms', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /wmts */
  async autoGetWmts(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/wmts', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /wmts/{tilematrixset}/{layer}/{z}/{x}/{y} */
  async autoGetWmtsTilematrixsetLayerZXY(pathParams: { tilematrixset: string, layer: string, z: string, x: string, y: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/wmts/${encodeURIComponent(String(pathParams.tilematrixset))}/${encodeURIComponent(String(pathParams.layer))}/${encodeURIComponent(String(pathParams.z))}/${encodeURIComponent(String(pathParams.x))}/${encodeURIComponent(String(pathParams.y))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /ws/jobs/{id} */
  async autoGetWsJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/ws/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

}
