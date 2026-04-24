import type { ProjectStage, UserRole, TaskStatus, ChatRole } from './enums';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string | null;
  role: UserRole;
  createdAt: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline?: string | null;
  description: string;
  stage: ProjectStage;
  industry?: string | null;
  logoUrl?: string | null;
  ownerId: string;
  owner?: User;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface RoadmapModule {
  id: string;
  order: number;
  title: string;
  description?: string | null;
  duration?: number | null;
  isCompleted: boolean;
}

export interface Roadmap {
  id: string;
  projectId: string;
  title: string;
  description?: string | null;
  modules: RoadmapModule[];
  progress: number;
  generatedAt: string;
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  sources?: Array<{
    docId: string;
    snippet: string;
    score: number;
  }> | null;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  assigneeId?: string | null;
  dueDate?: string | null;
  createdAt: string;
}
