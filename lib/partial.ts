interface Task {
  id: string,
  name: string,
  assignee: string,
  contacts: any[],
  associatedJob: string,
  submissionDate: string,
  allocatedTime: number,
  expectedCompletion: string,
  invoiceNumber: string,
  invoiceDueDate: string,
  comment: string,
  taskAddress: string,
}

type PartialTask = Partial<Task>;

export function main(): void {
  let pt: PartialTask = {
    allocatedTime: 0,
  };
}

main();
