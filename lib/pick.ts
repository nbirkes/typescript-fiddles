
interface Task {
  id: string,
  name: string,
  assignee: string,
  contacts: any[], //for brevity
  associatedJob: string,
  submissionDate: string,
  allocatedTime: number,
  expectedCompletion: string,
  invoiceNumber: string,
  invoiceDueDate: string,
  comment: string,
  taskAddress: string,
}

type PickedTask = Pick<Task, 'id' | 'name' | 'contacts'>

export function main(): void {
  let pt: PickedTask = {
    id: '1',
    name: 'my task',
    contacts: ['Nathan'],
  };
}

main();
