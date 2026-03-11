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

  /** List audit log entries (admin only) */
  async listauditlog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/audit', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/admin/audit-log */
  async autoGetApiAdminAuditLog(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/audit-log', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/admin/audit-log/actions */
  async autoGetApiAdminAuditLogActions(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/audit-log/actions', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/admin/audit-log/archive */
  async autoPostApiAdminAuditLogArchive(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/audit-log/archive', options.query);
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

  /** [auto] GET /api/admin/audit-log/export */
  async autoGetApiAdminAuditLogExport(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/audit-log/export', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/admin/audit-log/verify */
  async autoPostApiAdminAuditLogVerify(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/audit-log/verify', options.query);
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

  /** [auto] GET /api/admin/compliance/status */
  async autoGetApiAdminComplianceStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/compliance/status', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
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

  /** [auto] GET /api/admin/lti/keys */
  async autoGetApiAdminLtiKeys(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/lti/keys', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/admin/lti/keys */
  async autoPostApiAdminLtiKeys(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/lti/keys', options.query);
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

  /** [auto] GET /api/admin/lti/platforms */
  async autoGetApiAdminLtiPlatforms(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/lti/platforms', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/admin/lti/platforms */
  async autoPostApiAdminLtiPlatforms(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/lti/platforms', options.query);
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

  /** [auto] PUT /api/admin/lti/platforms/{id} */
  async autoPutApiAdminLtiPlatformsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/admin/lti/platforms/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/admin/lti/platforms/{id} */
  async autoDeleteApiAdminLtiPlatformsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/admin/lti/platforms/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/admin/sso/group-mappings */
  async autoGetApiAdminSsoGroupMappings(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/sso/group-mappings', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/admin/sso/group-mappings */
  async autoPostApiAdminSsoGroupMappings(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/sso/group-mappings', options.query);
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

  /** [auto] PUT /api/admin/sso/group-mappings/{id} */
  async autoPutApiAdminSsoGroupMappingsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/admin/sso/group-mappings/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/admin/sso/group-mappings/{id} */
  async autoDeleteApiAdminSsoGroupMappingsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/admin/sso/group-mappings/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/admin/sso/preview */
  async autoPostApiAdminSsoPreview(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/sso/preview', options.query);
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

  /** [auto] GET /api/admin/sso/status */
  async autoGetApiAdminSsoStatus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/sso/status', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/admin/sso/sync */
  async autoPostApiAdminSsoSync(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/admin/sso/sync', options.query);
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

  /** [auto] GET /api/assignments/{assignmentId}/code-config */
  async autoGetApiAssignmentsAssignmentIdCodeConfig(pathParams: { assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/code-config`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/assignments/{assignmentId}/code-config */
  async autoPostApiAssignmentsAssignmentIdCodeConfig(pathParams: { assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/code-config`, options.query);
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

  /** [auto] POST /api/auth/2fa/disable */
  async autoPostApiAuth2faDisable(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] POST /api/auth/2fa/enable */
  async autoPostApiAuth2faEnable(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** Request password reset token */
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

  /** [auto] POST /api/auth/resend-verification */
  async autoPostApiAuthResendVerification(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** SSO/OIDC callback endpoint */
  async ssocallback(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/auth/sso/callback', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Initiate SSO/OIDC login flow */
  async ssologin(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/auth/sso/login', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/auth/verify-2fa */
  async autoPostApiAuthVerify2fa(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] POST /api/auth/verify-email */
  async autoPostApiAuthVerifyEmail(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** Upgrade to a paid plan (creates Stripe checkout) */
  async upgradeplan(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/billing/upgrade', options.query);
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

  /** Get field campaign */
  async getfieldcampaign(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update field campaign */
  async updatefieldcampaign(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Delete field campaign */
  async deletefieldcampaign(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List authenticated user observations for a campaign */
  async listmycampaignobservations(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/my-observations`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List campaign observations */
  async listcampaignobservations(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/observations`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create campaign observation */
  async createcampaignobservation(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/observations`, options.query);
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

  /** Export campaign observations as GeoJSON */
  async exportcampaignobservationsgeojson(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/observations/export.geojson`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Campaign STAC catalog root */
  async getcampaignstaccatalog(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/stac`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Campaign STAC collection */
  async getcampaignstaccollection(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/stac/collection`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Campaign STAC items */
  async listcampaignstacitems(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/stac/items`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Campaign STAC item by ID */
  async getcampaignstacitem(pathParams: { id: string, itemId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/stac/items/${encodeURIComponent(String(pathParams.itemId))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Search campaign STAC items */
  async searchcampaignstacitems(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/campaigns/${encodeURIComponent(String(pathParams.id))}/stac/search`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
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

  /** List classrooms for the authenticated user */
  async listclassrooms(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/classrooms', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a classroom */
  async createclassroom(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/classrooms', options.query);
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

  /** Join a classroom using a join code */
  async joinclassroom(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/classrooms/join', options.query);
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

  /** [auto] GET /api/classrooms/templates */
  async autoGetApiClassroomsTemplates(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/classrooms/templates', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/templates/db */
  async autoGetApiClassroomsTemplatesDb(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/classrooms/templates/db', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{classroomId}/analytics */
  async autoGetApiClassroomsClassroomIdAnalytics(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/analytics`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{classroomId}/analytics/latest */
  async autoGetApiClassroomsClassroomIdAnalyticsLatest(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/analytics/latest`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{classroomId}/analytics/refresh */
  async autoPostApiClassroomsClassroomIdAnalyticsRefresh(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/analytics/refresh`, options.query);
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

  /** [auto] GET /api/classrooms/{classroomId}/assignments/{assignmentId}/my-team */
  async autoGetApiClassroomsClassroomIdAssignmentsAssignmentIdMyTeam(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/my-team`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/peer-reviews */
  async autoPostApiClassroomsClassroomIdAssignmentsAssignmentIdPeerReviews(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/peer-reviews`, options.query);
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

  /** [auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/plagiarism-check */
  async autoPostApiClassroomsClassroomIdAssignmentsAssignmentIdPlagiarismCheck(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/plagiarism-check`, options.query);
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

  /** [auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/plagiarism-check-all */
  async autoPostApiClassroomsClassroomIdAssignmentsAssignmentIdPlagiarismCheckAll(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/plagiarism-check-all`, options.query);
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

  /** [auto] GET /api/classrooms/{classroomId}/assignments/{assignmentId}/plagiarism-reports */
  async autoGetApiClassroomsClassroomIdAssignmentsAssignmentIdPlagiarismReports(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/plagiarism-reports`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{classroomId}/assignments/{assignmentId}/teams */
  async autoGetApiClassroomsClassroomIdAssignmentsAssignmentIdTeams(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/teams`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/teams */
  async autoPostApiClassroomsClassroomIdAssignmentsAssignmentIdTeams(pathParams: { classroomId: string, assignmentId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/teams`, options.query);
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

  /** [auto] DELETE /api/classrooms/{classroomId}/assignments/{assignmentId}/teams/{teamId} */
  async autoDeleteApiClassroomsClassroomIdAssignmentsAssignmentIdTeamsTeamId(pathParams: { classroomId: string, assignmentId: string, teamId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/teams/${encodeURIComponent(String(pathParams.teamId))}`, options.query);
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

  /** [auto] POST /api/classrooms/{classroomId}/assignments/{assignmentId}/teams/{teamId}/members */
  async autoPostApiClassroomsClassroomIdAssignmentsAssignmentIdTeamsTeamIdMembers(pathParams: { classroomId: string, assignmentId: string, teamId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/teams/${encodeURIComponent(String(pathParams.teamId))}/members`, options.query);
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

  /** [auto] DELETE /api/classrooms/{classroomId}/assignments/{assignmentId}/teams/{teamId}/members/{userId} */
  async autoDeleteApiClassroomsClassroomIdAssignmentsAssignmentIdTeamsTeamIdMembersUserId(pathParams: { classroomId: string, assignmentId: string, teamId: string, userId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/assignments/${encodeURIComponent(String(pathParams.assignmentId))}/teams/${encodeURIComponent(String(pathParams.teamId))}/members/${encodeURIComponent(String(pathParams.userId))}`, options.query);
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

  /** [auto] GET /api/classrooms/{classroomId}/campaigns */
  async autoGetApiClassroomsClassroomIdCampaigns(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/campaigns`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{classroomId}/campaigns */
  async autoPostApiClassroomsClassroomIdCampaigns(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/campaigns`, options.query);
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

  /** [auto] GET /api/classrooms/{classroomId}/forums */
  async autoGetApiClassroomsClassroomIdForums(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/forums`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{classroomId}/forums */
  async autoPostApiClassroomsClassroomIdForums(pathParams: { classroomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/forums`, options.query);
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

  /** [auto] GET /api/classrooms/{classroomId}/submissions/{submissionId}/peer-reviews */
  async autoGetApiClassroomsClassroomIdSubmissionsSubmissionIdPeerReviews(pathParams: { classroomId: string, submissionId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.classroomId))}/submissions/${encodeURIComponent(String(pathParams.submissionId))}/peer-reviews`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Get classroom details */
  async getclassroom(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/classrooms/{id} */
  async autoPutApiClassroomsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/classrooms/{id} */
  async autoDeleteApiClassroomsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List assignments in a classroom */
  async listassignments(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create an assignment */
  async createassignment(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments`, options.query);
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

  /** Get assignment details */
  async getassignment(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/classrooms/{id}/assignments/{aid} */
  async autoPutApiClassroomsIdAssignmentsAid(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
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

  /** [auto] DELETE /api/classrooms/{id}/assignments/{aid} */
  async autoDeleteApiClassroomsIdAssignmentsAid(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}`, options.query);
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

  /** [auto] POST /api/classrooms/{id}/assignments/{aid}/auto-grade */
  async autoPostApiClassroomsIdAssignmentsAidAutoGrade(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/auto-grade`, options.query);
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

  /** [auto] GET /api/classrooms/{id}/assignments/{aid}/rubric */
  async autoGetApiClassroomsIdAssignmentsAidRubric(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/rubric`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{id}/assignments/{aid}/rubric */
  async autoPostApiClassroomsIdAssignmentsAidRubric(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/rubric`, options.query);
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

  /** [auto] DELETE /api/classrooms/{id}/assignments/{aid}/rubric */
  async autoDeleteApiClassroomsIdAssignmentsAidRubric(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/rubric`, options.query);
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

  /** Start an assignment (create a submission) */
  async startassignment(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/start`, options.query);
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

  /** List submissions for an assignment */
  async listsubmissions(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/submissions`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Grade a submission */
  async gradesubmission(pathParams: { id: string, aid: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/submissions/${encodeURIComponent(String(pathParams.sid))}/grade`, options.query);
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

  /** [auto] POST /api/classrooms/{id}/assignments/{aid}/submissions/{sid}/return */
  async autoPostApiClassroomsIdAssignmentsAidSubmissionsSidReturn(pathParams: { id: string, aid: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/submissions/${encodeURIComponent(String(pathParams.sid))}/return`, options.query);
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

  /** Submit work for grading */
  async submitwork(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/assignments/${encodeURIComponent(String(pathParams.aid))}/submit`, options.query);
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

  /** [auto] GET /api/classrooms/{id}/curricula */
  async autoGetApiClassroomsIdCurricula(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/curricula`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{id}/grades/export */
  async autoGetApiClassroomsIdGradesExport(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/grades/export`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/classrooms/{id}/import */
  async autoPostApiClassroomsIdImport(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/import`, options.query);
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

  /** [auto] GET /api/classrooms/{id}/live */
  async autoGetApiClassroomsIdLive(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/live`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{id}/members */
  async autoGetApiClassroomsIdMembers(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/members`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/classrooms/{id}/members/{uid} */
  async autoPutApiClassroomsIdMembersUid(pathParams: { id: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** [auto] DELETE /api/classrooms/{id}/members/{uid} */
  async autoDeleteApiClassroomsIdMembersUid(pathParams: { id: string, uid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/members/${encodeURIComponent(String(pathParams.uid))}`, options.query);
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

  /** [auto] GET /api/classrooms/{id}/my-role */
  async autoGetApiClassroomsIdMyRole(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/my-role`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{id}/my-submissions */
  async autoGetApiClassroomsIdMySubmissions(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/my-submissions`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{id}/progress */
  async autoGetApiClassroomsIdProgress(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/progress`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/classrooms/{id}/quizzes */
  async autoGetApiClassroomsIdQuizzes(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/classrooms/${encodeURIComponent(String(pathParams.id))}/quizzes`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/code-assignments/{id} */
  async autoPutApiCodeAssignmentsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/code-assignments/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/code-assignments/{id} */
  async autoDeleteApiCodeAssignmentsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/code-assignments/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/code-assignments/{id}/run */
  async autoPostApiCodeAssignmentsIdRun(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/code-assignments/${encodeURIComponent(String(pathParams.id))}/run`, options.query);
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

  /** [auto] GET /api/code-assignments/{id}/submissions */
  async autoGetApiCodeAssignmentsIdSubmissions(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/code-assignments/${encodeURIComponent(String(pathParams.id))}/submissions`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/code-assignments/{id}/submit */
  async autoPostApiCodeAssignmentsIdSubmit(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/code-assignments/${encodeURIComponent(String(pathParams.id))}/submit`, options.query);
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

  /** [auto] GET /api/code-submissions/{id} */
  async autoGetApiCodeSubmissionsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/code-submissions/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
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

  /** [auto] GET /api/collab/{roomId}/contributions */
  async autoGetApiCollabRoomIdContributions(pathParams: { roomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collab/${encodeURIComponent(String(pathParams.roomId))}/contributions`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/collab/{roomId}/summary */
  async autoGetApiCollabRoomIdSummary(pathParams: { roomId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/collab/${encodeURIComponent(String(pathParams.roomId))}/summary`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
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

  /** [auto] GET /api/curricula */
  async autoGetApiCurricula(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/curricula', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/curricula */
  async autoPostApiCurricula(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/curricula', options.query);
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

  /** [auto] GET /api/curricula/{id} */
  async autoGetApiCurriculaId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/curricula/{id} */
  async autoPutApiCurriculaId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/curricula/{id} */
  async autoDeleteApiCurriculaId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/curricula/{id}/lessons */
  async autoPostApiCurriculaIdLessons(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}/lessons`, options.query);
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

  /** [auto] GET /api/curricula/{id}/lessons/{lid} */
  async autoGetApiCurriculaIdLessonsLid(pathParams: { id: string, lid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}/lessons/${encodeURIComponent(String(pathParams.lid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/curricula/{id}/lessons/{lid} */
  async autoPutApiCurriculaIdLessonsLid(pathParams: { id: string, lid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}/lessons/${encodeURIComponent(String(pathParams.lid))}`, options.query);
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

  /** [auto] DELETE /api/curricula/{id}/lessons/{lid} */
  async autoDeleteApiCurriculaIdLessonsLid(pathParams: { id: string, lid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}/lessons/${encodeURIComponent(String(pathParams.lid))}`, options.query);
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

  /** [auto] PUT /api/curricula/{id}/lessons/{lid}/progress */
  async autoPutApiCurriculaIdLessonsLidProgress(pathParams: { id: string, lid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}/lessons/${encodeURIComponent(String(pathParams.lid))}/progress`, options.query);
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

  /** [auto] GET /api/curricula/{id}/progress */
  async autoGetApiCurriculaIdProgress(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/curricula/${encodeURIComponent(String(pathParams.id))}/progress`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
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

  /** [auto] GET /api/discover */
  async autoGetApiDiscover(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/discover', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
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

  /** [auto] GET /api/forums/{forumId} */
  async autoGetApiForumsForumId(pathParams: { forumId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/forums/${encodeURIComponent(String(pathParams.forumId))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/forums/{forumId} */
  async autoDeleteApiForumsForumId(pathParams: { forumId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/forums/${encodeURIComponent(String(pathParams.forumId))}`, options.query);
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

  /** [auto] PUT /api/forums/{forumId}/lock */
  async autoPutApiForumsForumIdLock(pathParams: { forumId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/forums/${encodeURIComponent(String(pathParams.forumId))}/lock`, options.query);
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

  /** [auto] GET /api/forums/{forumId}/posts */
  async autoGetApiForumsForumIdPosts(pathParams: { forumId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/forums/${encodeURIComponent(String(pathParams.forumId))}/posts`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/forums/{forumId}/posts */
  async autoPostApiForumsForumIdPosts(pathParams: { forumId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/forums/${encodeURIComponent(String(pathParams.forumId))}/posts`, options.query);
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

  /** List all buildings */
  async listbuildings(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/buildings', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a building with floors, spaces, and transitions */
  async createbuilding(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/buildings', options.query);
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

  /** Get building with floors and transitions */
  async getbuilding(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update a building */
  async updatebuilding(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Delete a building */
  async deletebuilding(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Accessibility compliance analysis */
  async getaccessibilityvalidation(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/analysis/accessibility`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/indoor/buildings/{id}/analysis/dead-zones */
  async autoGetApiIndoorBuildingsIdAnalysisDeadZones(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/analysis/dead-zones`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/indoor/buildings/{id}/analysis/reachable */
  async autoGetApiIndoorBuildingsIdAnalysisReachable(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/analysis/reachable`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Historical occupancy and booking analytics */
  async gethistoricalanalytics(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/analytics`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List assets in a building */
  async listassets(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/assets`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create an asset */
  async createasset(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/assets`, options.query);
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

  /** Update asset position */
  async updateassetposition(pathParams: { id: string, aid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/assets/${encodeURIComponent(String(pathParams.aid))}`, options.query);
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

  /** List bookings */
  async listbookings(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/bookings`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a booking */
  async createbooking(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/bookings`, options.query);
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

  /** Cancel a booking */
  async cancelbooking(pathParams: { id: string, bid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/bookings/${encodeURIComponent(String(pathParams.bid))}`, options.query);
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

  /** Check in to a booking */
  async checkinbooking(pathParams: { id: string, bid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/bookings/${encodeURIComponent(String(pathParams.bid))}/checkin`, options.query);
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

  /** List boundaries */
  async listboundaries(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/boundaries`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create boundary */
  async createboundary(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/boundaries`, options.query);
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

  /** Get boundary */
  async getboundary(pathParams: { id: string, bid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/boundaries/${encodeURIComponent(String(pathParams.bid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update boundary */
  async updateboundary(pathParams: { id: string, bid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/boundaries/${encodeURIComponent(String(pathParams.bid))}`, options.query);
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

  /** Delete boundary */
  async deleteboundary(pathParams: { id: string, bid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/boundaries/${encodeURIComponent(String(pathParams.bid))}`, options.query);
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

  /** Compute evacuation routes */
  async getevacuationroutes(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/evacuation`, options.query);
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

  /** Trigger evacuation alert event */
  async triggerevacuationalert(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/evacuation/alert`, options.query);
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

  /** Optimal transport evacuation plan */
  async indoorevacuationot(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/evacuation/optimal`, options.query);
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

  /** Export building as IMDF */
  async exportimdf(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/export/imdf`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/indoor/buildings/{id}/export/indoorgml */
  async autoGetApiIndoorBuildingsIdExportIndoorgml(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/export/indoorgml`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List floors in a building */
  async listfloors(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/floors`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a floor */
  async createfloor(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/floors`, options.query);
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

  /** Upload floor plan image/PDF */
  async uploadfloorplan(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/floors/${encodeURIComponent(String(pathParams.fid))}/plan`, options.query);
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

  /** List spaces on a floor */
  async listfloorspaces(pathParams: { id: string, level: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/floors/${encodeURIComponent(String(pathParams.level))}/spaces`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List geofences */
  async listgeofences(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/geofences`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create geofence */
  async creategeofence(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/geofences`, options.query);
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

  /** Get geofence */
  async getgeofence(pathParams: { id: string, gid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/geofences/${encodeURIComponent(String(pathParams.gid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update geofence */
  async updategeofence(pathParams: { id: string, gid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/geofences/${encodeURIComponent(String(pathParams.gid))}`, options.query);
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

  /** Delete geofence */
  async deletegeofence(pathParams: { id: string, gid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/geofences/${encodeURIComponent(String(pathParams.gid))}`, options.query);
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

  /** Get building occupancy analytics */
  async buildingoccupancy(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/occupancy`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Batch ingest device positions */
  async ingestpositions(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/positions`, options.query);
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

  /** Latest position per device */
  async getlatestpositions(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/positions/latest`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Device position history */
  async getpositionhistory(pathParams: { id: string, deviceId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/positions/${encodeURIComponent(String(pathParams.deviceId))}/history`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/indoor/buildings/{id}/scenarios */
  async autoGetApiIndoorBuildingsIdScenarios(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/scenarios`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/indoor/buildings/{id}/scenarios */
  async autoPostApiIndoorBuildingsIdScenarios(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/scenarios`, options.query);
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

  /** [auto] GET /api/indoor/buildings/{id}/scenarios/{sid} */
  async autoGetApiIndoorBuildingsIdScenariosSid(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/scenarios/${encodeURIComponent(String(pathParams.sid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/indoor/buildings/{id}/scenarios/{sid} */
  async autoPutApiIndoorBuildingsIdScenariosSid(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/scenarios/${encodeURIComponent(String(pathParams.sid))}`, options.query);
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

  /** [auto] DELETE /api/indoor/buildings/{id}/scenarios/{sid} */
  async autoDeleteApiIndoorBuildingsIdScenariosSid(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/scenarios/${encodeURIComponent(String(pathParams.sid))}`, options.query);
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

  /** [auto] GET /api/indoor/buildings/{id}/sensors */
  async autoGetApiIndoorBuildingsIdSensors(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/sensors`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/indoor/buildings/{id}/sensors */
  async autoPostApiIndoorBuildingsIdSensors(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/sensors`, options.query);
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

  /** Sensor heatmap aggregation by space */
  async getindoorsensorheatmap(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/sensors/heatmap`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Sensor timeseries for space/sensor type */
  async getindoorsensortimeseries(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/sensors/timeseries`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Coupled fire and evacuation simulation */
  async indoorfireevacuation(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/simulate/fire-evacuation`, options.query);
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

  /** Create a space in a building */
  async createspace(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/spaces`, options.query);
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

  /** Get a single space */
  async getspace(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/spaces/${encodeURIComponent(String(pathParams.sid))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/indoor/buildings/{id}/spaces/{sid} */
  async autoPutApiIndoorBuildingsIdSpacesSid(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/spaces/${encodeURIComponent(String(pathParams.sid))}`, options.query);
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

  /** [auto] DELETE /api/indoor/buildings/{id}/spaces/{sid} */
  async autoDeleteApiIndoorBuildingsIdSpacesSid(pathParams: { id: string, sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/spaces/${encodeURIComponent(String(pathParams.sid))}`, options.query);
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

  /** Spectral graph analysis */
  async indoorspectralanalysis(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/spectral`, options.query);
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

  /** Get building statistics */
  async getbuildingstats(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/stats`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Real-time indoor event stream (SSE) */
  async indoorstream(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/stream`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/indoor/buildings/{id}/stream/status */
  async autoGetApiIndoorBuildingsIdStreamStatus(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/stream/status`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Compare topology of two buildings */
  async indoortopologycompare(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/topology/compare`, options.query);
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

  /** Topological connectivity resilience */
  async indoortopologyresilience(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/topology/resilience`, options.query);
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

  /** Track topology across building state snapshots */
  async indoortopologytrack(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/topology/track`, options.query);
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

  /** List transitions in a building */
  async listtransitions(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/transitions`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Validate building topology/integrity */
  async validatebuilding(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/buildings/${encodeURIComponent(String(pathParams.id))}/validate`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** List campuses */
  async listcampuses(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/campuses', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create campus */
  async createcampus(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/campuses', options.query);
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

  /** Get campus */
  async getcampus(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/campuses/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Update campus */
  async updatecampus(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/campuses/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Delete campus */
  async deletecampus(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/campuses/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List buildings in a campus */
  async listcampusbuildings(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/campuses/${encodeURIComponent(String(pathParams.id))}/buildings`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Multi-hour indoor condition forecast */
  async indoorforecast(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/forecast`, options.query);
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

  /** Riemannian cost-weighted navigation */
  async indoormanifoldnavigate(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/navigate/manifold`, options.query);
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

  /** Indoor acoustic ray tracing */
  async indooracoustics(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/simulate/acoustics`, options.query);
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

  /** LBM indoor airflow / ventilation simulation */
  async indoorairflow(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/simulate/airflow`, options.query);
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

  /** Aerosol infection risk model */
  async indoorinfectionrisk(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/simulate/infection-risk`, options.query);
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

  /** RF / wireless signal coverage */
  async indoorrfcoverage(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/simulate/rf`, options.query);
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

  /** Indoor thermal distribution */
  async indoorthermal(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/indoor/floors/${encodeURIComponent(String(pathParams.id))}/simulate/thermal`, options.query);
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

  /** Import a building from IFC or IndoorGML */
  async importbuilding(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/import', options.query);
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

  /** Find indoor navigation path between two spaces */
  async navigateindoor(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/navigate', options.query);
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

  /** Find nearest reachable space matching criteria */
  async findnearestindoor(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/navigate/nearest', options.query);
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

  /** Indoor-to-outdoor navigation */
  async navigateindooroutdoor(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/indoor/navigate/outdoor', options.query);
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

  /** [auto] GET /api/lti/.well-known/jwks.json */
  async autoGetApiLtiWellKnownJwksJson(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/lti/.well-known/jwks.json', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/lti/deeplink */
  async autoPostApiLtiDeeplink(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/lti/deeplink', options.query);
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

  /** [auto] POST /api/lti/launch */
  async autoPostApiLtiLaunch(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/lti/launch', options.query);
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

  /** [auto] GET /api/lti/login */
  async autoGetApiLtiLogin(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/lti/login', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
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

  /** [auto] GET /api/observations/{id} */
  async autoGetApiObservationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/observations/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/observations/{id} */
  async autoDeleteApiObservationsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/observations/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** List observation attachments */
  async listobservationattachments(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/observations/${encodeURIComponent(String(pathParams.id))}/attachments`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Upload observation attachment */
  async uploadobservationattachment(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/observations/${encodeURIComponent(String(pathParams.id))}/attachments`, options.query);
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

  /** [auto] PUT /api/observations/{id}/sync */
  async autoPutApiObservationsIdSync(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/observations/${encodeURIComponent(String(pathParams.id))}/sync`, options.query);
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

  /** [auto] GET /api/peer-reviews/my-assignments */
  async autoGetApiPeerReviewsMyAssignments(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/peer-reviews/my-assignments', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/peer-reviews/{id} */
  async autoGetApiPeerReviewsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/peer-reviews/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/peer-reviews/{id}/complete */
  async autoPutApiPeerReviewsIdComplete(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/peer-reviews/${encodeURIComponent(String(pathParams.id))}/complete`, options.query);
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

  /** [auto] POST /api/pipeline */
  async autoPostApiPipeline(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] GET /api/plagiarism-reports/{id} */
  async autoGetApiPlagiarismReportsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plagiarism-reports/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] DELETE /api/plagiarism-reports/{id} */
  async autoDeleteApiPlagiarismReportsId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plagiarism-reports/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PUT /api/plagiarism-reports/{id}/flag */
  async autoPutApiPlagiarismReportsIdFlag(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/plagiarism-reports/${encodeURIComponent(String(pathParams.id))}/flag`, options.query);
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

  /** [auto] PUT /api/posts/{postId} */
  async autoPutApiPostsPostId(pathParams: { postId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/posts/${encodeURIComponent(String(pathParams.postId))}`, options.query);
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

  /** [auto] DELETE /api/posts/{postId} */
  async autoDeleteApiPostsPostId(pathParams: { postId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/posts/${encodeURIComponent(String(pathParams.postId))}`, options.query);
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

  /** [auto] PUT /api/posts/{postId}/pin */
  async autoPutApiPostsPostIdPin(pathParams: { postId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/posts/${encodeURIComponent(String(pathParams.postId))}/pin`, options.query);
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

  /** [auto] GET /api/posts/{postId}/replies */
  async autoGetApiPostsPostIdReplies(pathParams: { postId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/posts/${encodeURIComponent(String(pathParams.postId))}/replies`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
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

  /** [auto] POST /api/quizzes */
  async autoPostApiQuizzes(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/quizzes', options.query);
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

  /** [auto] GET /api/quizzes/{id} */
  async autoGetApiQuizzesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/quizzes/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /api/quizzes/{id} */
  async autoPutApiQuizzesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/quizzes/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /api/quizzes/{id} */
  async autoDeleteApiQuizzesId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/quizzes/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] POST /api/quizzes/{id}/questions */
  async autoPostApiQuizzesIdQuestions(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/quizzes/${encodeURIComponent(String(pathParams.id))}/questions`, options.query);
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

  /** [auto] PUT /api/quizzes/{id}/questions/{qid} */
  async autoPutApiQuizzesIdQuestionsQid(pathParams: { id: string, qid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/quizzes/${encodeURIComponent(String(pathParams.id))}/questions/${encodeURIComponent(String(pathParams.qid))}`, options.query);
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

  /** [auto] DELETE /api/quizzes/{id}/questions/{qid} */
  async autoDeleteApiQuizzesIdQuestionsQid(pathParams: { id: string, qid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/quizzes/${encodeURIComponent(String(pathParams.id))}/questions/${encodeURIComponent(String(pathParams.qid))}`, options.query);
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

  /** [auto] POST /api/rubrics/{rubricId}/criteria */
  async autoPostApiRubricsRubricIdCriteria(pathParams: { rubricId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/rubrics/${encodeURIComponent(String(pathParams.rubricId))}/criteria`, options.query);
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

  /** [auto] PUT /api/rubrics/{rubricId}/criteria/{criterionId} */
  async autoPutApiRubricsRubricIdCriteriaCriterionId(pathParams: { rubricId: string, criterionId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/rubrics/${encodeURIComponent(String(pathParams.rubricId))}/criteria/${encodeURIComponent(String(pathParams.criterionId))}`, options.query);
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

  /** [auto] DELETE /api/rubrics/{rubricId}/criteria/{criterionId} */
  async autoDeleteApiRubricsRubricIdCriteriaCriterionId(pathParams: { rubricId: string, criterionId: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/rubrics/${encodeURIComponent(String(pathParams.rubricId))}/criteria/${encodeURIComponent(String(pathParams.criterionId))}`, options.query);
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

  /** [auto] GET /api/sql/tables */
  async autoGetApiSqlTables(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/sql/tables', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /api/sql/tables/{schema}/{table}/columns */
  async autoGetApiSqlTablesSchemaTableColumns(pathParams: { schema: string, table: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/sql/tables/${encodeURIComponent(String(pathParams.schema))}/${encodeURIComponent(String(pathParams.table))}/columns`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
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

  /** [auto] GET /api/submissions/{sid}/rubric-scores */
  async autoGetApiSubmissionsSidRubricScores(pathParams: { sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/submissions/${encodeURIComponent(String(pathParams.sid))}/rubric-scores`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/submissions/{sid}/rubric-scores */
  async autoPostApiSubmissionsSidRubricScores(pathParams: { sid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/submissions/${encodeURIComponent(String(pathParams.sid))}/rubric-scores`, options.query);
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

  /** [auto] POST /api/sync/diff */
  async autoPostApiSyncDiff(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] POST /api/sync/download */
  async autoPostApiSyncDownload(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] POST /api/sync/merge */
  async autoPostApiSyncMerge(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] GET /api/sync/status/{collection_id} */
  async autoGetApiSyncStatusCollectionId(pathParams: { collection_id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] POST /api/sync/upload */
  async autoPostApiSyncUpload(options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] GET /api/users/autocomplete */
  async autoGetApiUsersAutocomplete(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/users/autocomplete', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
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

  /** Initialize spatial version control for a dataset */
  async vcsinit(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/vcs/init', options.query);
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

  /** List webhooks */
  async listwebhooks(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/webhooks', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** Create a webhook */
  async createwebhook(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/api/webhooks', options.query);
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

  /** Update a webhook (admin only) */
  async updatewebhook(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/webhooks/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** Delete a webhook (admin only) */
  async deletewebhook(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/webhooks/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] GET /api/webhooks/{id}/deliveries */
  async autoGetApiWebhooksIdDeliveries(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/webhooks/${encodeURIComponent(String(pathParams.id))}/deliveries`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /api/webhooks/{id}/regenerate */
  async autoPostApiWebhooksIdRegenerate(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/webhooks/${encodeURIComponent(String(pathParams.id))}/regenerate`, options.query);
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

  /** Send a test event to a webhook (admin only) */
  async testwebhook(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/api/webhooks/${encodeURIComponent(String(pathParams.id))}/test`, options.query);
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
  async getcollection(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/collections/{id}', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
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
  async getfeatures(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/collections/{id}/items', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /collections/{id}/items */
  async autoPostCollectionsIdItems(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] GET /collections/{id}/items/{fid} */
  async autoGetCollectionsIdItemsFid(pathParams: { id: string, fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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
  async updatefeature(pathParams: { fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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
  async deletefeature(pathParams: { fid: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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
  async getqueryables(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/collections/{id}/queryables', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
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

  /** Register a new dataset */
  async registerdataset(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/datasets', options.query);
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
  async getpmtile(pathParams: { archive: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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
  async getrastertile(pathParams: { name: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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

  /** [auto] POST /saml/acs */
  async autoPostSamlAcs(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/saml/acs', options.query);
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

  /** [auto] GET /saml/login */
  async autoGetSamlLogin(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/saml/login', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /saml/logout */
  async autoGetSamlLogout(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/saml/logout', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /saml/metadata */
  async autoGetSamlMetadata(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/saml/metadata', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /scim/v2/ResourceTypes */
  async autoGetScimV2ResourceTypes(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/scim/v2/ResourceTypes', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /scim/v2/Schemas */
  async autoGetScimV2Schemas(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/scim/v2/Schemas', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /scim/v2/ServiceProviderConfig */
  async autoGetScimV2ServiceProviderConfig(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/scim/v2/ServiceProviderConfig', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] GET /scim/v2/Users */
  async autoGetScimV2Users(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/scim/v2/Users', options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] POST /scim/v2/Users */
  async autoPostScimV2Users(options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery('/scim/v2/Users', options.query);
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

  /** [auto] GET /scim/v2/Users/{id} */
  async autoGetScimV2UsersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/scim/v2/Users/${encodeURIComponent(String(pathParams.id))}`, options.query);
    const headers: Record<string, string> = { ...(options.headers ?? {}) };
    let body: BodyInit | undefined;
    if (options.body !== undefined) {
      body = JSON.stringify(options.body);
      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
    }
    return this.client.request(path, {
      method: 'GET',
      headers,
      body,
    });
  }

  /** [auto] PUT /scim/v2/Users/{id} */
  async autoPutScimV2UsersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/scim/v2/Users/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] PATCH /scim/v2/Users/{id} */
  async autoPatchScimV2UsersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/scim/v2/Users/${encodeURIComponent(String(pathParams.id))}`, options.query);
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

  /** [auto] DELETE /scim/v2/Users/{id} */
  async autoDeleteScimV2UsersId(pathParams: { id: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
    const path = withQuery(`/scim/v2/Users/${encodeURIComponent(String(pathParams.id))}`, options.query);
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
  async getvectortile(pathParams: { tileset: string }, options: GeneratedRequestOptions = {}): Promise<unknown> {
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
