export interface Task {
  id?: number; //we add the ? to say its optional. THis is needed so we dont get a null pointer error bc when we run the app there will be nothing here
  text?: string;
  day?: string;
  reminder?: boolean;
}
