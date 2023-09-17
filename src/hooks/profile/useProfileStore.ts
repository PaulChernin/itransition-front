import { User } from "@/types/User"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ProfileState {
    profile: User | null,
    setProfile: (profile: User | null) => void
}

export const useProfileStore = create<ProfileState>()(
    persist(
        (set) => ({
            profile: null,
            setProfile: profile => set(() => ({ profile: profile }))
        }),
        { name: 'profile-storage' }
    )
)