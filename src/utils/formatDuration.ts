export const formatDuration = (seconds: number): string => {
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const remainingMins: number = minutes % 60;
    return `${hours}h ${remainingMins}m`;
}