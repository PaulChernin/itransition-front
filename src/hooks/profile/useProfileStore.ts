import { User } from "@/types/User"
import { create } from "zustand"

const getStorageProfile = (): User | null => {
    const str = sessionStorage.getItem('profile')
    return str && JSON.parse(str)
}

const saveStorageProfile = (profile: User | null) => {
    if (!profile) {
        sessionStorage.removeItem('profile')
        return
    }
    const str = JSON.stringify(profile)
    sessionStorage.setItem('profile', str)
}

interface ProfileState {
    profile: User | null,
    setProfile: (profile: User | null) => void
}

export const useProfileStore = create<ProfileState>()((set) => ({
    profile: getStorageProfile(),
    setProfile: profile => {
        saveStorageProfile(profile)
        set(() => ({ profile: profile }))
    }
}))