export function clipText(text: string, maxLength: number): string {
    
    if (!text || text.length <= maxLength) {
      return text;
    } else {
      return text.substr(0, maxLength) + "...";
    }
  }
  