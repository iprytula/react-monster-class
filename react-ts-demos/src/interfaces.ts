export interface Info {
  id: number;
  name: string;
  email: string;
}

export interface AdminInfo extends Info {
  role: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}

export interface CounterAction {
  type: "INCREMENT" | "DECREMENT";
}

export interface CounterState {
  count: number;
}