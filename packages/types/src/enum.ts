export const ProjectStage = {
  IDEA: 'IDEA',
  VALIDATING: 'VALIDATING',
  BUILDING: 'BUILDING',
  LAUNCHED: 'LAUNCHED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type ProjectStage = (typeof ProjectStage)[keyof typeof ProjectStage];

export const UserRole = {
  STUDENT: 'STUDENT',
  MENTOR: 'MENTOR',
  ADMIN: 'ADMIN',
  ORGANIZER: 'ORGANIZER',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const TaskStatus = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  REVIEW: 'REVIEW',
  DONE: 'DONE',
  BLOCKED: 'BLOCKED',
} as const;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const ChatRole = {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT',
  SYSTEM: 'SYSTEM',
} as const;

export type ChatRole = (typeof ChatRole)[keyof typeof ChatRole];
