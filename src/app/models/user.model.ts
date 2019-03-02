/** API Model */
export interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/** View Model */
export interface UserVM {
  userId: number;
  id: number;
  label: string; // View model can have their own implementation to insulate from the possible API changes
  completed: boolean;
}
