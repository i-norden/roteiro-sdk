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

  /** [auto] GET /api/3dtiles */
  async autoGetApi3dtiles(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/3dtiles', options.query);
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

  /** [auto] GET /api/3dtiles/{dataset}/tileset.json */
  async autoGetApi3dtilesDatasetTilesetJson(pathParams: { dataset: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/3dtiles/${encodeURIComponent(String(pathParams.dataset))}/tileset.json`, options.query);
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

  /** [auto] GET /api/3dtiles/{dataset}/{path...} */
  async autoGetApi3dtilesDatasetPath(pathParams: { dataset: string, path: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/3dtiles/${encodeURIComponent(String(pathParams.dataset))}/${encodeURIComponent(String(pathParams.path))}`, options.query);
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

  /** [auto] GET /api/activity */
  async autoGetApiActivity(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/activity', options.query);
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

  /** [auto] POST /api/admin/backup */
  async autoPostApiAdminBackup(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/backup', options.query);
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

  /** [auto] GET /api/admin/backup/status */
  async autoGetApiAdminBackupStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/backup/status', options.query);
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

  /** [auto] GET /api/admin/backups */
  async autoGetApiAdminBackups(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/backups', options.query);
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

  /** [auto] GET /api/admin/billing/tenants */
  async autoGetApiAdminBillingTenants(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/billing/tenants', options.query);
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

  /** [auto] GET /api/admin/billing/tenants/{id} */
  async autoGetApiAdminBillingTenantsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/admin/billing/tenants/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/admin/billing/tenants/{id}/reconcile */
  async autoPostApiAdminBillingTenantsIdReconcile(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/admin/billing/tenants/${encodeURIComponent(String(pathParams.id))}/reconcile`, options.query);
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

  /** [auto] GET /api/admin/dr/config */
  async autoGetApiAdminDrConfig(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/dr/config', options.query);
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

  /** [auto] PUT /api/admin/dr/config */
  async autoPutApiAdminDrConfig(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/dr/config', options.query);
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

  /** [auto] GET /api/admin/health */
  async autoGetApiAdminHealth(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/health', options.query);
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
    const path = withQuery('/api/admin/onboarding-analytics', options.query);
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

  /** [auto] POST /api/admin/restore */
  async autoPostApiAdminRestore(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/restore', options.query);
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

  /** [auto] GET /api/admin/stats */
  async autoGetApiAdminStats(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/stats', options.query);
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

  /** [auto] GET /api/admin/usage */
  async autoGetApiAdminUsage(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/usage', options.query);
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
    const path = withQuery('/api/admin/users', options.query);
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
    const path = withQuery(`/api/admin/users/${encodeURIComponent(String(pathParams.id))}`, options.query);
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
    const path = withQuery(`/api/admin/users/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Generate geoprocessing pipeline from natural language */
  async postApiAiAnalyze(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/ai/analyze', options.query);
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

  /** Natural language to CQL2 filter query */
  async postApiAiNlQuery(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/ai/nl-query', options.query);
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

  /** Natural language to PostGIS SQL */
  async postApiAiNlToSql(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/ai/nl-to-sql', options.query);
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

  /** [auto] GET /api/analysis/jobs */
  async autoGetApiAnalysisJobs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/analysis/jobs', options.query);
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

  /** [auto] POST /api/analysis/jobs */
  async autoPostApiAnalysisJobs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/analysis/jobs', options.query);
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

  /** [auto] GET /api/analysis/jobs/{id} */
  async autoGetApiAnalysisJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/analysis/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/analysis/jobs/{id} */
  async autoDeleteApiAnalysisJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/analysis/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List available analysis operations */
  async listanalysisoperations(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/analysis/operations', options.query);
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

  /** Record onboarding analytics event */
  async recordonboardinganalyticsevent(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/analytics/events', options.query);
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

  /** [auto] GET /api/annotations/{id} */
  async autoGetApiAnnotationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/annotations/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/annotations/{id} */
  async autoDeleteApiAnnotationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/annotations/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/annotations/{id}/resolve */
  async autoPutApiAnnotationsIdResolve(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/annotations/${encodeURIComponent(String(pathParams.id))}/resolve`, options.query);
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

  /** [auto] GET /api/attachments/{aid} */
  async autoGetApiAttachmentsAid(pathParams: { aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/attachments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
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

  /** [auto] DELETE /api/attachments/{aid} */
  async autoDeleteApiAttachmentsAid(pathParams: { aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/attachments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
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

  /** [auto] GET /api/attachments/{aid}/thumbnail */
  async autoGetApiAttachmentsAidThumbnail(pathParams: { aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/attachments/${encodeURIComponent(String(pathParams.aid))}/thumbnail`, options.query);
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
    const path = withQuery('/api/auth/2fa/disable', options.query);
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
    const path = withQuery('/api/auth/2fa/enable', options.query);
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
    const path = withQuery('/api/auth/api-keys', options.query);
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
    const path = withQuery('/api/auth/api-keys', options.query);
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
    const path = withQuery(`/api/auth/api-keys/${encodeURIComponent(String(pathParams.id))}`, options.query);
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
    const path = withQuery('/api/auth/forgot-password', options.query);
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

  /** [auto] PUT /api/auth/locale */
  async autoPutApiAuthLocale(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/auth/locale', options.query);
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
    const path = withQuery('/api/auth/login', options.query);
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
    const path = withQuery('/api/auth/logout', options.query);
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
    const path = withQuery('/api/auth/me', options.query);
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
    const path = withQuery('/api/auth/profile', options.query);
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
    const path = withQuery('/api/auth/register', options.query);
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
    const path = withQuery('/api/auth/resend-verification', options.query);
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
    const path = withQuery('/api/auth/reset-password', options.query);
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
    const path = withQuery('/api/auth/verify-2fa', options.query);
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
    const path = withQuery('/api/auth/verify-email', options.query);
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

  /** [auto] POST /api/billing/academic-verify */
  async autoPostApiBillingAcademicVerify(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/academic-verify', options.query);
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

  /** [auto] POST /api/billing/checkout */
  async autoPostApiBillingCheckout(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/checkout', options.query);
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

  /** [auto] GET /api/billing/invoices */
  async autoGetApiBillingInvoices(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/invoices', options.query);
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
    const path = withQuery('/api/billing/plan', options.query);
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
    const path = withQuery('/api/billing/plans', options.query);
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

  /** [auto] POST /api/billing/portal */
  async autoPostApiBillingPortal(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/portal', options.query);
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

  /** [auto] POST /api/billing/quote */
  async autoPostApiBillingQuote(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/quote', options.query);
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

  /** [auto] GET /api/billing/status */
  async autoGetApiBillingStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/status', options.query);
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
    const path = withQuery('/api/billing/usage', options.query);
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

  /** [auto] GET /api/billing/usage/history */
  async autoGetApiBillingUsageHistory(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/usage/history', options.query);
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

  /** [auto] POST /api/billing/webhook */
  async autoPostApiBillingWebhook(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/webhook', options.query);
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
    const path = withQuery('/api/bookmarks', options.query);
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
    const path = withQuery('/api/bookmarks', options.query);
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
    const path = withQuery(`/api/bookmarks/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/bulk/delete */
  async autoDeleteApiBulkDelete(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/bulk/delete', options.query);
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

  /** [auto] POST /api/bulk/export */
  async autoPostApiBulkExport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/bulk/export', options.query);
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

  /** [auto] POST /api/bulk/import */
  async autoPostApiBulkImport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/bulk/import', options.query);
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

  /** [auto] POST /api/bulk/update */
  async autoPostApiBulkUpdate(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/bulk/update', options.query);
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

  /** List public data catalog entries */
  async listcatalog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/catalog', options.query);
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

  /** [auto] POST /api/catalog/annotations/{id}/vote */
  async autoPostApiCatalogAnnotationsIdVote(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/catalog/annotations/${encodeURIComponent(String(pathParams.id))}/vote`, options.query);
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

  /** List catalog categories */
  async listcatalogcategories(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/catalog/categories', options.query);
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

  /** List deferred catalog sources */
  async listdeferredcatalogsources(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/catalog/deferred', options.query);
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

  /** List enhanced catalog entries with filters */
  async listenhancedcatalog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/catalog/enhanced', options.query);
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

  /** Get enhanced catalog entry by ID */
  async getenhancedcatalogentry(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/catalog/enhanced/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/catalog/enhanced/{id}/annotations */
  async autoGetApiCatalogEnhancedIdAnnotations(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/catalog/enhanced/${encodeURIComponent(String(pathParams.id))}/annotations`, options.query);
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

  /** [auto] POST /api/catalog/enhanced/{id}/annotations */
  async autoPostApiCatalogEnhancedIdAnnotations(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/catalog/enhanced/${encodeURIComponent(String(pathParams.id))}/annotations`, options.query);
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

  /** [auto] PATCH /api/catalog/enhanced/{id}/verify */
  async autoPatchApiCatalogEnhancedIdVerify(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/catalog/enhanced/${encodeURIComponent(String(pathParams.id))}/verify`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PATCH',
      headers,
      body,
    });
  }

  /** Import a dataset from the public catalog */
  async importfromcatalog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/catalog/import', options.query);
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

  /** List catalog tags ordered by frequency */
  async listcatalogtags(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/catalog/tags', options.query);
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

  /** Collaboration hub metrics */
  async collabmetrics(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/collab/metrics', options.query);
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

  /** List active collaboration rooms */
  async listcollabrooms(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/collab/rooms', options.query);
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

  /** [auto] GET /api/collections/{id}/history */
  async autoGetApiCollectionsIdHistory(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/history`, options.query);
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

  /** [auto] GET /api/collections/{id}/items.arrow */
  async autoGetApiCollectionsIdItemsArrow(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items.arrow`, options.query);
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

  /** [auto] GET /api/collections/{id}/items.parquet */
  async autoGetApiCollectionsIdItemsParquet(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items.parquet`, options.query);
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

  /** [auto] POST /api/collections/{id}/items/batch */
  async autoPostApiCollectionsIdItemsBatch(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/batch`, options.query);
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

  /** [auto] POST /api/collections/{id}/items/export */
  async autoPostApiCollectionsIdItemsExport(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/export`, options.query);
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

  /** [auto] GET /api/collections/{id}/items/{featureId}/comments */
  async autoGetApiCollectionsIdItemsFeatureIdComments(pathParams: { id: string, featureId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.featureId))}/comments`, options.query);
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

  /** [auto] POST /api/collections/{id}/items/{featureId}/comments */
  async autoPostApiCollectionsIdItemsFeatureIdComments(pathParams: { id: string, featureId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.featureId))}/comments`, options.query);
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

  /** [auto] PUT /api/collections/{id}/items/{featureId}/comments/{commentId} */
  async autoPutApiCollectionsIdItemsFeatureIdCommentsCommentId(pathParams: { id: string, featureId: string, commentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.featureId))}/comments/${encodeURIComponent(String(pathParams.commentId))}`, options.query);
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

  /** [auto] DELETE /api/collections/{id}/items/{featureId}/comments/{commentId} */
  async autoDeleteApiCollectionsIdItemsFeatureIdCommentsCommentId(pathParams: { id: string, featureId: string, commentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.featureId))}/comments/${encodeURIComponent(String(pathParams.commentId))}`, options.query);
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

  /** [auto] GET /api/collections/{id}/items/{fid}/attachments */
  async autoGetApiCollectionsIdItemsFidAttachments(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}/attachments`, options.query);
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

  /** [auto] POST /api/collections/{id}/items/{fid}/attachments */
  async autoPostApiCollectionsIdItemsFidAttachments(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}/attachments`, options.query);
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

  /** [auto] GET /api/collections/{id}/items/{fid}/attachments/count */
  async autoGetApiCollectionsIdItemsFidAttachmentsCount(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}/attachments/count`, options.query);
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

  /** [auto] GET /api/collections/{id}/items/{fid}/history */
  async autoGetApiCollectionsIdItemsFidHistory(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.fid))}/history`, options.query);
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

  /** [auto] GET /api/comments/{commentId}/replies */
  async autoGetApiCommentsCommentIdReplies(pathParams: { commentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/comments/${encodeURIComponent(String(pathParams.commentId))}/replies`, options.query);
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

  /** Convert dataset format */
  async convertdataset(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/convert', options.query);
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

  /** [auto] POST /api/datasets/register-remote */
  async autoPostApiDatasetsRegisterRemote(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/datasets/register-remote', options.query);
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

  /** [auto] GET /api/datasets/status */
  async autoGetApiDatasetsStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/datasets/status', options.query);
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

  /** [auto] GET /api/datasets/{id}/lineage */
  async autoGetApiDatasetsIdLineage(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.id))}/lineage`, options.query);
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

  /** [auto] GET /api/datasets/{name}/metadata */
  async autoGetApiDatasetsNameMetadata(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/metadata`, options.query);
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

  /** [auto] PATCH /api/datasets/{name}/metadata */
  async autoPatchApiDatasetsNameMetadata(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/metadata`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'PATCH',
      headers,
      body,
    });
  }

  /** [auto] GET /api/datasets/{name}/profile */
  async autoGetApiDatasetsNameProfile(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/profile`, options.query);
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

  /** [auto] POST /api/datasets/{name}/restore */
  async autoPostApiDatasetsNameRestore(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/restore`, options.query);
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

  /** [auto] GET /api/datasets/{name}/schema */
  async autoGetApiDatasetsNameSchema(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/schema`, options.query);
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

  /** [auto] PUT /api/datasets/{name}/schema */
  async autoPutApiDatasetsNameSchema(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/schema`, options.query);
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

  /** [auto] POST /api/datasets/{name}/validate */
  async autoPostApiDatasetsNameValidate(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/validate`, options.query);
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

  /** [auto] GET /api/datasets/{name}/validation-rules */
  async autoGetApiDatasetsNameValidationRules(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/validation-rules`, options.query);
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

  /** [auto] PUT /api/datasets/{name}/validation-rules */
  async autoPutApiDatasetsNameValidationRules(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/datasets/${encodeURIComponent(String(pathParams.name))}/validation-rules`, options.query);
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

  /** Compare two datasets */
  async diffdatasets(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/diff', options.query);
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

  /** API documentation UI */
  async getswaggerui(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/docs', options.query);
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

  /** [auto] GET /api/docs/internal/manifest */
  async autoGetApiDocsInternalManifest(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/docs/internal/manifest', options.query);
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

  /** [auto] GET /api/docs/internal/{id} */
  async autoGetApiDocsInternalId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/docs/internal/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/docs/public/manifest */
  async autoGetApiDocsPublicManifest(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/docs/public/manifest', options.query);
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

  /** [auto] GET /api/docs/public/{id} */
  async autoGetApiDocsPublicId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/docs/public/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/errors */
  async autoPostApiErrors(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/errors', options.query);
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

  /** Export GeoJSON data to another format */
  async exportdata(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/export', options.query);
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

  /** [auto] GET /api/federation/sources */
  async autoGetApiFederationSources(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/federation/sources', options.query);
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

  /** [auto] POST /api/federation/sources */
  async autoPostApiFederationSources(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/federation/sources', options.query);
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

  /** [auto] GET /api/federation/sources/{id} */
  async autoGetApiFederationSourcesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/federation/sources/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/federation/sources/{id} */
  async autoDeleteApiFederationSourcesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/federation/sources/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/formats */
  async autoGetApiFormats(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/formats', options.query);
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

  /** [auto] POST /api/gdpr/delete-cancel */
  async autoPostApiGdprDeleteCancel(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/gdpr/delete-cancel', options.query);
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

  /** [auto] POST /api/gdpr/delete-request */
  async autoPostApiGdprDeleteRequest(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/gdpr/delete-request', options.query);
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

  /** [auto] GET /api/gdpr/delete-status */
  async autoGetApiGdprDeleteStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/gdpr/delete-status', options.query);
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

  /** [auto] GET /api/gdpr/export */
  async autoGetApiGdprExport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/gdpr/export', options.query);
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

  /** [auto] GET /api/geo */
  async autoGetApiGeo(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/geo', options.query);
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

  /** Forward geocode an address */
  async geocode(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/geocode', options.query);
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

  /** [auto] POST /api/geocode/batch */
  async autoPostApiGeocodeBatch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/geocode/batch', options.query);
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

  /** Reverse geocode coordinates */
  async reversegeocode(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/geocode/reverse', options.query);
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

  /** [auto] POST /api/geodesic/area */
  async autoPostApiGeodesicArea(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/geodesic/area', options.query);
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

  /** [auto] POST /api/geodesic/length */
  async autoPostApiGeodesicLength(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/geodesic/length', options.query);
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

  /** [auto] POST /api/invitations */
  async autoPostApiInvitations(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/invitations', options.query);
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

  /** [auto] POST /api/invitations/accept */
  async autoPostApiInvitationsAccept(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/invitations/accept', options.query);
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

  /** [auto] DELETE /api/invitations/{id} */
  async autoDeleteApiInvitationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/invitations/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/invitations/{type}/{id} */
  async autoGetApiInvitationsTypeId(pathParams: { type: string, id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/invitations/${encodeURIComponent(String(pathParams.type))}/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/jobs */
  async autoGetApiJobs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/jobs', options.query);
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

  /** [auto] POST /api/jobs */
  async autoPostApiJobs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/jobs', options.query);
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

  /** [auto] GET /api/jobs/{id} */
  async autoGetApiJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/jobs/{id} */
  async autoDeleteApiJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/layers */
  async autoGetApiLayers(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/layers', options.query);
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

  /** [auto] POST /api/layers */
  async autoPostApiLayers(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/layers', options.query);
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

  /** [auto] GET /api/layers/{id} */
  async autoGetApiLayersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/layers/{id} */
  async autoPutApiLayersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/layers/{id} */
  async autoDeleteApiLayersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/layers/{id}/archive */
  async autoPostApiLayersIdArchive(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}/archive`, options.query);
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

  /** [auto] GET /api/layers/{id}/preview */
  async autoGetApiLayersIdPreview(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}/preview`, options.query);
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

  /** [auto] POST /api/layers/{id}/publish */
  async autoPostApiLayersIdPublish(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}/publish`, options.query);
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

  /** [auto] POST /api/layers/{id}/upload */
  async autoPostApiLayersIdUpload(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/layers/${encodeURIComponent(String(pathParams.id))}/upload`, options.query);
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

  /** Terrain curvature analysis */
  async computecurvature(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/manifold/curvature', options.query);
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

  /** Geodesic shortest path on terrain */
  async computegeodesic(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/manifold/geodesic', options.query);
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

  /** Optimal transport between distributions */
  async computeoptimaltransport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/manifold/transport', options.query);
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

  /** [auto] GET /api/map-config */
  async autoGetApiMapConfig(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/map-config', options.query);
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

  /** Publish a map view */
  async publishmap(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/maps/publish', options.query);
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

  /** List published maps */
  async listpublishedmaps(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/maps/published', options.query);
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

  /** Unpublish a map */
  async unpublishmap(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/maps/published/${encodeURIComponent(String(pathParams.token))}`, options.query);
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

  /** Update published map embed configuration */
  async updatepublishedmapembedconfig(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/maps/published/${encodeURIComponent(String(pathParams.token))}/embed-config`, options.query);
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

  /** Get published map view statistics */
  async getpublishedmapstats(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/maps/published/${encodeURIComponent(String(pathParams.token))}/stats`, options.query);
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

  /** [auto] GET /api/marketplace/categories */
  async autoGetApiMarketplaceCategories(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/marketplace/categories', options.query);
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

  /** [auto] GET /api/marketplace/featured */
  async autoGetApiMarketplaceFeatured(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/marketplace/featured', options.query);
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

  /** [auto] GET /api/marketplace/items */
  async autoGetApiMarketplaceItems(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/marketplace/items', options.query);
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

  /** [auto] POST /api/marketplace/items */
  async autoPostApiMarketplaceItems(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/marketplace/items', options.query);
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

  /** [auto] GET /api/marketplace/items/{id} */
  async autoGetApiMarketplaceItemsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/marketplace/items/{id} */
  async autoPutApiMarketplaceItemsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/marketplace/items/{id} */
  async autoDeleteApiMarketplaceItemsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/marketplace/items/{id}/download */
  async autoGetApiMarketplaceItemsIdDownload(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}/download`, options.query);
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

  /** [auto] POST /api/marketplace/items/{id}/purchase */
  async autoPostApiMarketplaceItemsIdPurchase(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}/purchase`, options.query);
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

  /** [auto] GET /api/marketplace/items/{id}/reviews */
  async autoGetApiMarketplaceItemsIdReviews(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}/reviews`, options.query);
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

  /** [auto] POST /api/marketplace/items/{id}/reviews */
  async autoPostApiMarketplaceItemsIdReviews(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/marketplace/items/${encodeURIComponent(String(pathParams.id))}/reviews`, options.query);
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

  /** [auto] GET /api/notifications */
  async autoGetApiNotifications(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications', options.query);
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

  /** [auto] GET /api/notifications/events */
  async autoGetApiNotificationsEvents(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/events', options.query);
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

  /** [auto] GET /api/notifications/mentions */
  async autoGetApiNotificationsMentions(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/mentions', options.query);
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

  /** [auto] PUT /api/notifications/mentions/read-all */
  async autoPutApiNotificationsMentionsReadAll(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/mentions/read-all', options.query);
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

  /** [auto] GET /api/notifications/mentions/unread-count */
  async autoGetApiNotificationsMentionsUnreadCount(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/mentions/unread-count', options.query);
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

  /** [auto] PUT /api/notifications/mentions/{id}/read */
  async autoPutApiNotificationsMentionsIdRead(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/notifications/mentions/${encodeURIComponent(String(pathParams.id))}/read`, options.query);
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

  /** [auto] PUT /api/notifications/read-all */
  async autoPutApiNotificationsReadAll(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/read-all', options.query);
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

  /** [auto] GET /api/notifications/settings */
  async autoGetApiNotificationsSettings(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/settings', options.query);
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

  /** [auto] PUT /api/notifications/settings */
  async autoPutApiNotificationsSettings(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/settings', options.query);
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

  /** [auto] POST /api/notifications/test */
  async autoPostApiNotificationsTest(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/test', options.query);
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

  /** [auto] GET /api/notifications/unread-count */
  async autoGetApiNotificationsUnreadCount(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/notifications/unread-count', options.query);
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

  /** [auto] PUT /api/notifications/{id}/read */
  async autoPutApiNotificationsIdRead(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/notifications/${encodeURIComponent(String(pathParams.id))}/read`, options.query);
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

  /** OpenAPI specification */
  async getopenapispec(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/openapi.yaml', options.query);
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

  /** List available processing operations */
  async listoperations(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/operations', options.query);
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

  /** [auto] GET /api/orgs */
  async autoGetApiOrgs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/orgs', options.query);
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

  /** [auto] POST /api/orgs */
  async autoPostApiOrgs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/orgs', options.query);
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

  /** [auto] GET /api/orgs/{id} */
  async autoGetApiOrgsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/orgs/{id} */
  async autoPutApiOrgsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/orgs/{id} */
  async autoDeleteApiOrgsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/orgs/{id}/members */
  async autoGetApiOrgsIdMembers(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
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

  /** [auto] POST /api/orgs/{id}/members */
  async autoPostApiOrgsIdMembers(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
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

  /** [auto] PUT /api/orgs/{id}/members/{uid} */
  async autoPutApiOrgsIdMembersUid(pathParams: { id: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** [auto] DELETE /api/orgs/{id}/members/{uid} */
  async autoDeleteApiOrgsIdMembersUid(pathParams: { id: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** [auto] GET /api/orgs/{id}/teams */
  async autoGetApiOrgsIdTeams(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/teams`, options.query);
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

  /** [auto] POST /api/orgs/{id}/teams */
  async autoPostApiOrgsIdTeams(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/teams`, options.query);
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

  /** [auto] PUT /api/orgs/{id}/teams/{tid} */
  async autoPutApiOrgsIdTeamsTid(pathParams: { id: string, tid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/teams/${encodeURIComponent(String(pathParams.tid))}`, options.query);
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

  /** [auto] DELETE /api/orgs/{id}/teams/{tid} */
  async autoDeleteApiOrgsIdTeamsTid(pathParams: { id: string, tid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/teams/${encodeURIComponent(String(pathParams.tid))}`, options.query);
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

  /** [auto] POST /api/orgs/{id}/teams/{tid}/members */
  async autoPostApiOrgsIdTeamsTidMembers(pathParams: { id: string, tid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/teams/${encodeURIComponent(String(pathParams.tid))}/members`, options.query);
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

  /** [auto] DELETE /api/orgs/{id}/teams/{tid}/members/{uid} */
  async autoDeleteApiOrgsIdTeamsTidMembersUid(pathParams: { id: string, tid: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/orgs/${encodeURIComponent(String(pathParams.id))}/teams/${encodeURIComponent(String(pathParams.tid))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** [auto] POST /api/osm/import */
  async autoPostApiOsmImport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/osm/import', options.query);
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

  /** [auto] POST /api/osm/inspect */
  async autoPostApiOsmInspect(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/osm/inspect', options.query);
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

  /** [auto] POST /api/ownership-transfers */
  async autoPostApiOwnershipTransfers(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/ownership-transfers', options.query);
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

  /** [auto] GET /api/ownership-transfers/pending */
  async autoGetApiOwnershipTransfersPending(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/ownership-transfers/pending', options.query);
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

  /** [auto] GET /api/ownership-transfers/sent */
  async autoGetApiOwnershipTransfersSent(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/ownership-transfers/sent', options.query);
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

  /** [auto] GET /api/ownership-transfers/{id} */
  async autoGetApiOwnershipTransfersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/ownership-transfers/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/ownership-transfers/{id}/accept */
  async autoPutApiOwnershipTransfersIdAccept(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/ownership-transfers/${encodeURIComponent(String(pathParams.id))}/accept`, options.query);
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

  /** [auto] PUT /api/ownership-transfers/{id}/cancel */
  async autoPutApiOwnershipTransfersIdCancel(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/ownership-transfers/${encodeURIComponent(String(pathParams.id))}/cancel`, options.query);
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

  /** [auto] PUT /api/ownership-transfers/{id}/reject */
  async autoPutApiOwnershipTransfersIdReject(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/ownership-transfers/${encodeURIComponent(String(pathParams.id))}/reject`, options.query);
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

  /** [auto] GET /api/permissions */
  async autoGetApiPermissions(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/permissions', options.query);
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

  /** [auto] POST /api/permissions */
  async autoPostApiPermissions(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/permissions', options.query);
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

  /** [auto] POST /api/permissions/check */
  async autoPostApiPermissionsCheck(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/permissions/check', options.query);
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

  /** [auto] DELETE /api/permissions/{id} */
  async autoDeleteApiPermissionsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/permissions/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Run a multi-step processing pipeline */
  async runpipeline(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/pipeline', options.query);
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

  /** [auto] GET /api/pipeline-runs/{runId} */
  async autoGetApiPipelineRunsRunId(pathParams: { runId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipeline-runs/${encodeURIComponent(String(pathParams.runId))}`, options.query);
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

  /** List supported pipeline operations */
  async listpipelineoperations(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/pipeline/operations', options.query);
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

  /** [auto] GET /api/pipelines */
  async autoGetApiPipelines(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/pipelines', options.query);
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

  /** [auto] POST /api/pipelines */
  async autoPostApiPipelines(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/pipelines', options.query);
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

  /** [auto] GET /api/pipelines/templates */
  async autoGetApiPipelinesTemplates(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/pipelines/templates', options.query);
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

  /** [auto] GET /api/pipelines/{id} */
  async autoGetApiPipelinesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipelines/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/pipelines/{id} */
  async autoPutApiPipelinesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipelines/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/pipelines/{id} */
  async autoDeleteApiPipelinesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipelines/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/pipelines/{id}/duplicate */
  async autoPostApiPipelinesIdDuplicate(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipelines/${encodeURIComponent(String(pathParams.id))}/duplicate`, options.query);
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

  /** [auto] POST /api/pipelines/{id}/execute */
  async autoPostApiPipelinesIdExecute(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipelines/${encodeURIComponent(String(pathParams.id))}/execute`, options.query);
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

  /** [auto] GET /api/pipelines/{id}/runs */
  async autoGetApiPipelinesIdRuns(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/pipelines/${encodeURIComponent(String(pathParams.id))}/runs`, options.query);
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

  /** List installed plugins */
  async listplugins(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins', options.query);
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

  /** Browse available plugins */
  async plugincatalog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/catalog', options.query);
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

  /** Install a plugin */
  async installplugin(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/install', options.query);
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

  /** [auto] GET /api/plugins/installed */
  async autoGetApiPluginsInstalled(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/installed', options.query);
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

  /** Get plugin manifest */
  async getpluginmanifest(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/local/${encodeURIComponent(String(pathParams.name))}/manifest`, options.query);
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

  /** Enable or disable a plugin */
  async toggleplugin(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/local/${encodeURIComponent(String(pathParams.name))}/toggle`, options.query);
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

  /** [auto] GET /api/plugins/marketplace */
  async autoGetApiPluginsMarketplace(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/marketplace', options.query);
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

  /** [auto] POST /api/plugins/marketplace */
  async autoPostApiPluginsMarketplace(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/marketplace', options.query);
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

  /** [auto] GET /api/plugins/marketplace/{id} */
  async autoGetApiPluginsMarketplaceId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/plugins/marketplace/{id} */
  async autoPutApiPluginsMarketplaceId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/plugins/marketplace/{id}/approve */
  async autoPostApiPluginsMarketplaceIdApprove(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/approve`, options.query);
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

  /** [auto] PUT /api/plugins/marketplace/{id}/config */
  async autoPutApiPluginsMarketplaceIdConfig(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/config`, options.query);
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

  /** [auto] POST /api/plugins/marketplace/{id}/execute */
  async autoPostApiPluginsMarketplaceIdExecute(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/execute`, options.query);
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

  /** [auto] POST /api/plugins/marketplace/{id}/install */
  async autoPostApiPluginsMarketplaceIdInstall(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/install`, options.query);
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

  /** [auto] DELETE /api/plugins/marketplace/{id}/install */
  async autoDeleteApiPluginsMarketplaceIdInstall(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/install`, options.query);
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

  /** [auto] POST /api/plugins/marketplace/{id}/publish */
  async autoPostApiPluginsMarketplaceIdPublish(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/publish`, options.query);
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

  /** [auto] GET /api/plugins/marketplace/{id}/reviews */
  async autoGetApiPluginsMarketplaceIdReviews(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/reviews`, options.query);
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

  /** [auto] POST /api/plugins/marketplace/{id}/reviews */
  async autoPostApiPluginsMarketplaceIdReviews(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plugins/marketplace/${encodeURIComponent(String(pathParams.id))}/reviews`, options.query);
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

  /** [auto] GET /api/plugins/registry */
  async autoGetApiPluginsRegistry(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/registry', options.query);
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

  /** [auto] POST /api/plugins/registry/install */
  async autoPostApiPluginsRegistryInstall(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/plugins/registry/install', options.query);
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

  /** Get a user preference */
  async getpreference(pathParams: { key: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/preferences/${encodeURIComponent(String(pathParams.key))}`, options.query);
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

  /** Set a user preference */
  async setpreference(pathParams: { key: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/preferences/${encodeURIComponent(String(pathParams.key))}`, options.query);
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

  /** Run spatial processing operation */
  async processdataset(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/process', options.query);
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

  /** [auto] GET /api/process/jobs */
  async autoGetApiProcessJobs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/process/jobs', options.query);
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

  /** [auto] POST /api/process/jobs */
  async autoPostApiProcessJobs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/process/jobs', options.query);
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

  /** [auto] POST /api/process/jobs/batch */
  async autoPostApiProcessJobsBatch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/process/jobs/batch', options.query);
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

  /** [auto] GET /api/process/jobs/{id} */
  async autoGetApiProcessJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/process/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/process/jobs/{id} */
  async autoDeleteApiProcessJobsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/process/jobs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/process/jobs/{id}/artifacts/{format} */
  async autoGetApiProcessJobsIdArtifactsFormat(pathParams: { id: string, format: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/process/jobs/${encodeURIComponent(String(pathParams.id))}/artifacts/${encodeURIComponent(String(pathParams.format))}`, options.query);
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

  /** [auto] POST /api/process/jobs/{id}/rerun */
  async autoPostApiProcessJobsIdRerun(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/process/jobs/${encodeURIComponent(String(pathParams.id))}/rerun`, options.query);
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

  /** [auto] POST /api/process/preflight */
  async autoPostApiProcessPreflight(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/process/preflight', options.query);
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

  /** List projects for current user */
  async listprojects(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/projects', options.query);
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

  /** Create a new project */
  async createproject(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/projects', options.query);
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

  /** Get project details */
  async getproject(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Update project */
  async updateproject(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Delete project */
  async deleteproject(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List datasets in project */
  async listprojectdatasets(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/datasets`, options.query);
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

  /** Add dataset to project */
  async addprojectdataset(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/datasets`, options.query);
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

  /** [auto] GET /api/projects/{id}/datasets/details */
  async autoGetApiProjectsIdDatasetsDetails(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/datasets/details`, options.query);
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

  /** Remove dataset from project */
  async removeprojectdataset(pathParams: { id: string, name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/datasets/${encodeURIComponent(String(pathParams.name))}`, options.query);
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

  /** List project members */
  async listprojectmembers(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
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

  /** Add member to project */
  async addprojectmember(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
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

  /** Remove member from project */
  async removeprojectmember(pathParams: { id: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** Get the current user's saved project workspace */
  async getprojectworkspace(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/workspace`, options.query);
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

  /** Save the current user's project workspace */
  async setprojectworkspace(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.id))}/workspace`, options.query);
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

  /** [auto] GET /api/projects/{projectId}/annotations */
  async autoGetApiProjectsProjectIdAnnotations(pathParams: { projectId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.projectId))}/annotations`, options.query);
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

  /** [auto] POST /api/projects/{projectId}/annotations */
  async autoPostApiProjectsProjectIdAnnotations(pathParams: { projectId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/projects/${encodeURIComponent(String(pathParams.projectId))}/annotations`, options.query);
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

  /** Get query history */
  async getqueryhistory(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/queries/history', options.query);
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

  /** List saved queries */
  async listsavedqueries(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/queries/saved', options.query);
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

  /** Save a query */
  async savequery(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/queries/saved', options.query);
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

  /** Delete a saved query */
  async deletesavedquery(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/queries/saved/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Execute SQL query against GeoParquet datasets */
  async postApiQuerySql(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/query/sql', options.query);
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

  /** List parquet/spatial datasets available to the tenant */
  async getApiQuerySqlDatasets(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/query/sql/datasets', options.query);
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

  /** DuckDB engine status and capabilities */
  async getApiQuerySqlInfo(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/query/sql/info', options.query);
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

  /** [auto] POST /api/raster/classify/isodata */
  async autoPostApiRasterClassifyIsodata(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/classify/isodata', options.query);
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

  /** [auto] POST /api/raster/classify/kmeans */
  async autoPostApiRasterClassifyKmeans(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/classify/kmeans', options.query);
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

  /** [auto] POST /api/raster/classify/ml */
  async autoPostApiRasterClassifyMl(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/classify/ml', options.query);
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

  /** [auto] POST /api/raster/classify/rf */
  async autoPostApiRasterClassifyRf(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/classify/rf', options.query);
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

  /** [auto] POST /api/raster/kde */
  async autoPostApiRasterKde(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/kde', options.query);
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

  /** [auto] POST /api/raster/mosaic */
  async autoPostApiRasterMosaic(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/mosaic', options.query);
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

  /** [auto] GET /api/raster/mosaic/info */
  async autoGetApiRasterMosaicInfo(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/mosaic/info', options.query);
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

  /** [auto] GET /api/raster/operations */
  async autoGetApiRasterOperations(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/operations', options.query);
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

  /** [auto] POST /api/raster/process */
  async autoPostApiRasterProcess(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/raster/process', options.query);
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

  /** [auto] GET /api/records */
  async autoGetApiRecords(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/records', options.query);
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

  /** [auto] GET /api/records/conformance */
  async autoGetApiRecordsConformance(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/records/conformance', options.query);
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

  /** [auto] GET /api/relationships */
  async autoGetApiRelationships(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/relationships', options.query);
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

  /** [auto] POST /api/relationships */
  async autoPostApiRelationships(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/relationships', options.query);
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

  /** [auto] GET /api/relationships/{id} */
  async autoGetApiRelationshipsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/relationships/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/relationships/{id} */
  async autoDeleteApiRelationshipsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/relationships/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/relationships/{id}/links */
  async autoPostApiRelationshipsIdLinks(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/relationships/${encodeURIComponent(String(pathParams.id))}/links`, options.query);
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

  /** [auto] GET /api/relationships/{id}/links/{fid} */
  async autoGetApiRelationshipsIdLinksFid(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/relationships/${encodeURIComponent(String(pathParams.id))}/links/${encodeURIComponent(String(pathParams.fid))}`, options.query);
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

  /** [auto] DELETE /api/relationships/{id}/links/{oid}/{did} */
  async autoDeleteApiRelationshipsIdLinksOidDid(pathParams: { id: string, oid: string, did: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/relationships/${encodeURIComponent(String(pathParams.id))}/links/${encodeURIComponent(String(pathParams.oid))}/${encodeURIComponent(String(pathParams.did))}`, options.query);
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

  /** [auto] PUT /api/resource-comments/{commentId} */
  async autoPutApiResourceCommentsCommentId(pathParams: { commentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/resource-comments/${encodeURIComponent(String(pathParams.commentId))}`, options.query);
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

  /** [auto] DELETE /api/resource-comments/{commentId} */
  async autoDeleteApiResourceCommentsCommentId(pathParams: { commentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/resource-comments/${encodeURIComponent(String(pathParams.commentId))}`, options.query);
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

  /** [auto] GET /api/resource-comments/{commentId}/replies */
  async autoGetApiResourceCommentsCommentIdReplies(pathParams: { commentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/resource-comments/${encodeURIComponent(String(pathParams.commentId))}/replies`, options.query);
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

  /** [auto] GET /api/resources/{type}/{id}/comments */
  async autoGetApiResourcesTypeIdComments(pathParams: { type: string, id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/resources/${encodeURIComponent(String(pathParams.type))}/${encodeURIComponent(String(pathParams.id))}/comments`, options.query);
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

  /** [auto] POST /api/resources/{type}/{id}/comments */
  async autoPostApiResourcesTypeIdComments(pathParams: { type: string, id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/resources/${encodeURIComponent(String(pathParams.type))}/${encodeURIComponent(String(pathParams.id))}/comments`, options.query);
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

  /** Compute route between waypoints */
  async computeroute(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/route', options.query);
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

  /** Compute isochrone polygons */
  async computeisochrone(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/route/isochrone', options.query);
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

  /** Compute origin-destination matrix */
  async computeroutematrix(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/route/matrix', options.query);
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

  /** Compute distance-based service area polygons */
  async computeservicearea(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/route/service-area', options.query);
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

  /** [auto] GET /api/search */
  async autoGetApiSearch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/search', options.query);
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

  /** [auto] POST /api/share */
  async autoPostApiShare(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/share', options.query);
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

  /** [auto] POST /api/share/links */
  async autoPostApiShareLinks(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/share/links', options.query);
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

  /** [auto] DELETE /api/share/links/{token} */
  async autoDeleteApiShareLinksToken(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/share/links/${encodeURIComponent(String(pathParams.token))}`, options.query);
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

  /** [auto] GET /api/share/links/{type}/{id} */
  async autoGetApiShareLinksTypeId(pathParams: { type: string, id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/share/links/${encodeURIComponent(String(pathParams.type))}/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/share/{id} */
  async autoDeleteApiShareId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/share/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/share/{type}/{id} */
  async autoGetApiShareTypeId(pathParams: { type: string, id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/share/${encodeURIComponent(String(pathParams.type))}/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Acoustic ray tracing simulation */
  async simulateacoustic(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/simulation/acoustic', options.query);
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

  /** Thermal diffusion simulation */
  async simulatethermal(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/simulation/thermal', options.query);
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

  /** Lattice Boltzmann wind flow simulation */
  async simulatewind(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/simulation/wind', options.query);
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

  /** [auto] GET /api/sql/datasets */
  async autoGetApiSqlDatasets(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sql/datasets', options.query);
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

  /** [auto] GET /api/sql/datasets/{name}/columns */
  async autoGetApiSqlDatasetsNameColumns(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/sql/datasets/${encodeURIComponent(String(pathParams.name))}/columns`, options.query);
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

  /** [auto] POST /api/sql/query */
  async autoPostApiSqlQuery(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sql/query', options.query);
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

  /** [auto] GET /api/stac/credentials */
  async autoGetApiStacCredentials(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stac/credentials', options.query);
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

  /** [auto] POST /api/stac/credentials */
  async autoPostApiStacCredentials(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stac/credentials', options.query);
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

  /** Import STAC asset into local datasets */
  async stacimportasset(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stac/import', options.query);
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

  /** Browse remote STAC catalog */
  async stacremotecatalog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stac/remote', options.query);
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

  /** Browse remote STAC collections */
  async stacremotecollections(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stac/remote/collections', options.query);
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

  /** Browse remote STAC items for a collection */
  async stacremoteitems(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stac/remote/items', options.query);
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

  /** List stories */
  async liststories(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stories', options.query);
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

  /** Create a story */
  async createstory(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/stories', options.query);
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

  /** Get a story */
  async getstory(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Update a story */
  async updatestory(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Delete a story */
  async deletestory(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/stories/{id}/collections/{collectionId}/items */
  async autoGetApiStoriesIdCollectionsCollectionIdItems(pathParams: { id: string, collectionId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/collections/${encodeURIComponent(String(pathParams.collectionId))}/items`, options.query);
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

  /** List story members */
  async liststorymembers(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
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

  /** Add member to story (admin only) */
  async addstorymember(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
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

  /** Remove member from story (admin only) */
  async removestorymember(pathParams: { id: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** Publish a story (generate public token) */
  async publishstory(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/publish`, options.query);
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

  /** List slides in a story */
  async listslides(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/slides`, options.query);
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

  /** Add a slide to a story */
  async addslide(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/slides`, options.query);
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

  /** Reorder slides in a story */
  async reorderslides(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/slides/reorder`, options.query);
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

  /** Update a slide */
  async updateslide(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/slides/${encodeURIComponent(String(pathParams.sid))}`, options.query);
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

  /** Delete a slide */
  async deleteslide(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/stories/${encodeURIComponent(String(pathParams.id))}/slides/${encodeURIComponent(String(pathParams.sid))}`, options.query);
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

  /** Get differential changes since a cursor position */
  async syncdiff(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sync/diff', options.query);
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

  /** Download full collection data for offline use */
  async syncdownload(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sync/download', options.query);
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

  /** Three-way merge for conflict resolution */
  async syncmerge(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sync/merge', options.query);
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

  /** Get sync status for a collection */
  async syncstatus(pathParams: { collection_id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/sync/status/${encodeURIComponent(String(pathParams.collection_id))}`, options.query);
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

  /** Upload offline changes with conflict detection */
  async syncupload(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sync/upload', options.query);
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

  /** [auto] GET /api/templates */
  async autoGetApiTemplates(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/templates', options.query);
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

  /** [auto] POST /api/templates */
  async autoPostApiTemplates(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/templates', options.query);
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

  /** [auto] GET /api/templates/{slug} */
  async autoGetApiTemplatesSlug(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/templates/${encodeURIComponent(String(pathParams.slug))}`, options.query);
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

  /** [auto] POST /api/templates/{slug}/create-project */
  async autoPostApiTemplatesSlugCreateProject(pathParams: { slug: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/templates/${encodeURIComponent(String(pathParams.slug))}/create-project`, options.query);
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

  /** [auto] POST /api/terrain/cutfill */
  async autoPostApiTerrainCutfill(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/terrain/cutfill', options.query);
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

  /** [auto] POST /api/terrain/los */
  async autoPostApiTerrainLos(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/terrain/los', options.query);
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

  /** [auto] POST /api/terrain/viewshed */
  async autoPostApiTerrainViewshed(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/terrain/viewshed', options.query);
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

  /** Bottleneck distance between persistence diagrams */
  async computebottleneckdistance(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/topology/bottleneck', options.query);
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

  /** Compute persistent homology */
  async computepersistenthomology(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/topology/homology', options.query);
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

  /** Track topological evolution over time */
  async computespatiotemporal(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/topology/spatiotemporal', options.query);
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

  /** Wasserstein distance between persistence diagrams */
  async computewassersteindistance(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/topology/wasserstein', options.query);
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

  /** [auto] GET /api/users/search */
  async autoGetApiUsersSearch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/users/search', options.query);
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

  /** [auto] GET /api/vcs/branches */
  async autoGetApiVcsBranches(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/branches', options.query);
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

  /** [auto] POST /api/vcs/branches */
  async autoPostApiVcsBranches(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/branches', options.query);
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

  /** [auto] POST /api/vcs/branches/switch */
  async autoPostApiVcsBranchesSwitch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/branches/switch', options.query);
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

  /** [auto] DELETE /api/vcs/branches/{name} */
  async autoDeleteApiVcsBranchesName(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/branches/${encodeURIComponent(String(pathParams.name))}`, options.query);
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

  /** Commit current state of a dataset */
  async vcscommit(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/commit', options.query);
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

  /** Show diff between VCS commits */
  async vcsdiff(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/diff', options.query);
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

  /** View version history */
  async vcslog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/log', options.query);
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

  /** [auto] GET /api/vcs/log/dataset/{name} */
  async autoGetApiVcsLogDatasetName(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/log/dataset/${encodeURIComponent(String(pathParams.name))}`, options.query);
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

  /** [auto] GET /api/vcs/prs */
  async autoGetApiVcsPrs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/prs', options.query);
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

  /** [auto] POST /api/vcs/prs */
  async autoPostApiVcsPrs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/prs', options.query);
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

  /** [auto] GET /api/vcs/prs/{id} */
  async autoGetApiVcsPrsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/prs/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/vcs/prs/{id}/close */
  async autoPostApiVcsPrsIdClose(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/prs/${encodeURIComponent(String(pathParams.id))}/close`, options.query);
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

  /** [auto] POST /api/vcs/prs/{id}/comments */
  async autoPostApiVcsPrsIdComments(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/prs/${encodeURIComponent(String(pathParams.id))}/comments`, options.query);
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

  /** [auto] GET /api/vcs/prs/{id}/conflicts */
  async autoGetApiVcsPrsIdConflicts(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/prs/${encodeURIComponent(String(pathParams.id))}/conflicts`, options.query);
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

  /** [auto] POST /api/vcs/prs/{id}/merge */
  async autoPostApiVcsPrsIdMerge(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/prs/${encodeURIComponent(String(pathParams.id))}/merge`, options.query);
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

  /** [auto] POST /api/vcs/prs/{id}/reviews */
  async autoPostApiVcsPrsIdReviews(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/prs/${encodeURIComponent(String(pathParams.id))}/reviews`, options.query);
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

  /** List managed VCS repositories */
  async vcslistrepos(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/repos', options.query);
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

  /** Create a managed VCS repository */
  async vcscreaterepo(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/repos', options.query);
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

  /** [auto] GET /api/vcs/repos/{id} */
  async autoGetApiVcsReposId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/repos/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/vcs/repos/{id} */
  async autoDeleteApiVcsReposId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/repos/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/vcs/tags */
  async autoGetApiVcsTags(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/tags', options.query);
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

  /** [auto] POST /api/vcs/tags */
  async autoPostApiVcsTags(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/tags', options.query);
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

  /** [auto] DELETE /api/vcs/tags/{name} */
  async autoDeleteApiVcsTagsName(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/vcs/tags/${encodeURIComponent(String(pathParams.name))}`, options.query);
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

  /** [auto] GET /api/watch/{resourceType}/{resourceId} */
  async autoGetApiWatchResourceTypeResourceId(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}`, options.query);
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

  /** [auto] POST /api/watch/{resourceType}/{resourceId} */
  async autoPostApiWatchResourceTypeResourceId(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}`, options.query);
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

  /** [auto] DELETE /api/watch/{resourceType}/{resourceId} */
  async autoDeleteApiWatchResourceTypeResourceId(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}`, options.query);
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

  /** [auto] GET /api/watch/{resourceType}/{resourceId}/watchers */
  async autoGetApiWatchResourceTypeResourceIdWatchers(pathParams: { resourceType: string, resourceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/watch/${encodeURIComponent(String(pathParams.resourceType))}/${encodeURIComponent(String(pathParams.resourceId))}/watchers`, options.query);
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

  /** [auto] GET /api/watches */
  async autoGetApiWatches(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/watches', options.query);
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

  /** [auto] GET /api/whitelabel */
  async autoGetApiWhitelabel(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/whitelabel', options.query);
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

  /** GraphQL query via GET */
  async graphqlget(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/graphql', options.query);
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

  /** GraphQL query/mutation */
  async graphqlpost(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/graphql', options.query);
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

  /** [auto] GET /graphql/playground */
  async autoGetGraphqlPlayground(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/graphql/playground', options.query);
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

  /** Get a published story (no auth required) */
  async getpublicstory(pathParams: { token: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/public/stories/${encodeURIComponent(String(pathParams.token))}`, options.query);
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

  /** [auto] GET /public/stories/{token}/collections/{collectionId}/items */
  async autoGetPublicStoriesTokenCollectionsCollectionIdItems(pathParams: { token: string, collectionId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/public/stories/${encodeURIComponent(String(pathParams.token))}/collections/${encodeURIComponent(String(pathParams.collectionId))}/items`, options.query);
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

  /** Apply band math expression */
  async rasterbandmath(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/raster/${encodeURIComponent(String(pathParams.name))}/band-math`, options.query);
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

  /** Export a raster band as GeoTIFF under the configured export directory */
  async exportrasterband(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** Get sampled histogram/statistics for a raster band */
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

  /** Compute NDVI from raster bands */
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

  /** Get raster band statistics */
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

  /** [auto] GET /raster/{name}/values */
  async autoGetRasterNameValues(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** STAC catalog root */
  async stacroot(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/stac', options.query);
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

  /** List STAC collections */
  async staclistcollections(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/stac/collections', options.query);
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

  /** Get a STAC collection */
  async stacgetcollection(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/stac/collections/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List STAC items in a collection */
  async staclistitems(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/stac/collections/${encodeURIComponent(String(pathParams.id))}/items`, options.query);
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

  /** [auto] GET /stac/collections/{id}/items/{itemID} */
  async autoGetStacCollectionsIdItemsItemID(pathParams: { id: string, itemID: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/stac/collections/${encodeURIComponent(String(pathParams.id))}/items/${encodeURIComponent(String(pathParams.itemID))}`, options.query);
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

  /** [auto] GET /stac/queryables */
  async autoGetStacQueryables(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/stac/queryables', options.query);
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

  /** STAC search */
  async stacsearch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/stac/search', options.query);
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

  /** [auto] POST /stac/search */
  async autoPostStacSearch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/stac/search', options.query);
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

  /** WebSocket endpoint for real-time collaboration */
  async collaborate(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/ws/collaborate', options.query);
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
