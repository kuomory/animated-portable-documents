export type ShowSaveFilePickerType = (options?: {
  suggestedName?: string;
  types?: Array<{
    description?: string;
    accept?: Record<string, string[]>;
  }>;
  excludeAcceptAllOption?: boolean;
}) => Promise<FileSystemFileHandle>;
export type ShowOpenFilePickerType = (options?: {
  multiple?: boolean;
  excludeAcceptAllOption?: boolean;
  types?: Array<{
    description?: string;
    accept?: Record<string, string[]>;
  }>;
}) => Promise<FileSystemFileHandle[]>;

export type WindowWithShowSaveFilePicker = Window &
  typeof globalThis & {
    showSaveFilePicker?: ShowSaveFilePickerType;
    showOpenFilePicker?: ShowOpenFilePickerType;
  };
