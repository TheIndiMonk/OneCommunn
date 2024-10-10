import { Therapist } from "./Therapist";

export interface TherapistProps {
    Therapist: Therapist[]
    onSelectTherapist?: (therapist: Therapist) => void;  // Function is now optional
};