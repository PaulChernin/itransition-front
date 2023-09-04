import { create } from "zustand"
import { Profile } from "./Profile"

const getStorageProfile = (): Profile | null => {
    const str = sessionStorage.getItem('profile')
    return str && JSON.parse(str)
}

const saveStorageProfile = (profile: Profile | null) => {
    if (!profile) {
        sessionStorage.removeItem('profile')
        return
    }
    const str = JSON.stringify(profile)
    sessionStorage.setItem('profile', str)
}

interface ProfileState {
    profile: Profile | null,
    setProfile: (profile: Profile | null) => void
}

export const useProfileStore = create<ProfileState>()((set) => ({
    profile: getStorageProfile(),
    setProfile: profile => {
        saveStorageProfile(profile)
        set(() => ({ profile: profile }))
    }
}))