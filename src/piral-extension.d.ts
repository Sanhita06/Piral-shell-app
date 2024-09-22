// piral-extension.d.ts
import 'piral-core';

// Extend the AppState interface to include selectedOption
declare module 'piral-core/lib/types/custom' {
  interface AppState {
    selectedOption: string; // Define selectedOption as part of the AppState
  }
}
