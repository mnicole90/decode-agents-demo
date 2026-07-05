// Couche DOMAINE — logique métier pure, sans base de données ni framework.
// C'est ce qu'on teste en TDD.

export type AgentStatus = "idle" | "active" | "offline";

export const VALID_ROLES = ["PM", "Dev", "Reviewer", "Tester"] as const;
export type Role = (typeof VALID_ROLES)[number];

export type Agent = {
  name: string;
  role: Role;
  status: AgentStatus;
};

/**
 * Fabrique un Agent valide. Lève une erreur si les règles métier ne sont pas respectées.
 */
export function createAgent(
  name: string,
  role: string,
  status: AgentStatus = "idle",
): Agent {
  if (!name.trim()) {
    throw new Error("Le nom de l'agent est requis");
  }
  if (!VALID_ROLES.includes(role as Role)) {
    throw new Error(`Rôle invalide : ${role}`);
  }
  return { name: name.trim(), role: role as Role, status };
}
