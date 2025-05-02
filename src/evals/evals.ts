//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const createNoteEval: EvalFunction = {
    name: "Create Note Tool Evaluation",
    description: "Evaluates the note creation functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Create a note named 'meetingNotes.md' with the content '# Meeting Notes\n- Agenda\n- Action Items' in the 'work' folder.");
        return JSON.parse(result);
    }
};

const searchVaultEval: EvalFunction = {
    name: "search-vault Evaluation",
    description: "Evaluates the search-vault tool functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Search my notes for any mentions of 'Machine Learning' within the 'Research' folder, ignoring case, and summarize the findings.");
        return JSON.parse(result);
    }
};

const createNoteEval: EvalFunction = {
    name: 'Create Note Tool Evaluation',
    description: 'Evaluates the creation of a new note in the specified vault',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Create a new note in vault2 named note.md in folder journal/2024 with the content '# My Note\nThis is the note content.'");
        return JSON.parse(result);
    }
};

const searchVaultEval: EvalFunction = {
    name: "search-vault Tool Evaluation",
    description: "Evaluates the searching functionality within a vault",
    run: async () => {
        const result = await grade(openai("gpt-4"), "How can I search for notes containing 'tag:status/active' in vault2?");
        return JSON.parse(result);
    }
};

const readNoteEval: EvalFunction = {
    name: "read-note Tool Evaluation",
    description: "Evaluates reading a note from the vault",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please read the content of the note named 'note.md' in vault1 folder 'journal/2024'.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [createNoteEval, searchVaultEval, createNoteEval, searchVaultEval, readNoteEval]
};
  
export default config;
  
export const evals = [createNoteEval, searchVaultEval, createNoteEval, searchVaultEval, readNoteEval];