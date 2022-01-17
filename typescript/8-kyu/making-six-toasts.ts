export function sixToast(num:number):number {
    return num > 6 ? Math.abs(num - 6) : num < 6 ? 6 - num : 0
}