export function formatPeriod(period: string | [string, string]): string {
  return Array.isArray(period) ? `${period[0]} - ${period[1]}` : period;
}

export function formatEnvironment(environment: string | string[]): string {
  return Array.isArray(environment) ? environment.join(' · ') : environment;
}
