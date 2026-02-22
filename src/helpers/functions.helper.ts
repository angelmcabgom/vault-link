export class FunctionsHelper {
  static getFunctionName(): string {
    // Stack trace: "Error\n at ClassName.methodName (..."
    const stack = new Error().stack;
    if (!stack) return 'unknown function';
    const line = stack.split('\n')[2]; // 0=Error, 1=this method, 2=caller
    const match = line.match(/at (\S+)/);
    return match ? match[1] : 'unknown function';
  }
}
