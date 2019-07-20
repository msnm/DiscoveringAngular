import {FormControl} from '@angular/forms';

export function restrictedWords(words: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) {
      return null;
    }
    const rWords: string[] = words.map( v => control.value.includes(v) ? v : null).filter(v => v != null);
    if (rWords && rWords.length > 0) {
      return { restrictedWords: rWords.join(', ')};
    } else {
      return null;
    }
  };
}
