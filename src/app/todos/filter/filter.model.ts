export enum VISIBILITY_FILTER {
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL',
  SHOW_DELETED = 'SHOW_DELETED'
}

export interface TodoFilter {
  label: string;
  value: VISIBILITY_FILTER;
}

export const initalFilters: TodoFilter[] = [
  { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
  { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
  { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE },
  { label: 'Deleted', value: VISIBILITY_FILTER.SHOW_DELETED }
];

