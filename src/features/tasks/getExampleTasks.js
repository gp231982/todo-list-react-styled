export const getExampleTasks = () => async () => {
  const response = await fetch("/todo-list-react-styled/exampleTasks.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  console.log("Response from fetch:", response)
   return await response.json();
};
