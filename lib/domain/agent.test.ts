import { describe, it, expect } from "vitest";
import { createAgent } from "./agent";

describe("createAgent (règles métier)", () => {
  it("crée un agent valide avec le statut idle par défaut", () => {
    const agent = createAgent("Louis", "PM");
    expect(agent).toEqual({ name: "Louis", role: "PM", status: "idle" });
  });

  it("nettoie les espaces autour du nom", () => {
    expect(createAgent("  Louis  ", "Dev").name).toBe("Louis");
  });

  it("refuse un nom vide", () => {
    expect(() => createAgent("", "PM")).toThrow(/nom/i);
  });

  it("refuse un rôle inconnu", () => {
    expect(() => createAgent("X", "Hacker")).toThrow(/Rôle invalide/);
  });
});
