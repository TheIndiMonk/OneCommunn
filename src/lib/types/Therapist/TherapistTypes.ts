export interface Therapist {
    name: string;
    title?: string;
    image?: string;
    description: string;
    status?: string;
    socialLinks?: { fb: string, tw: string, yu: string, in: string };
}