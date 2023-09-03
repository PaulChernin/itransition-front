import { useEffect, useState } from "react"
import { Profile } from "./Profile"

const getStorageProfile = (): Profile | null => {
    const str = localStorage.getItem('profile')
    return str && JSON.parse(str)
}

const saveStorageProfile = (profile: Profile | null) => {
    if (!profile) {
        localStorage.removeItem('profile')
        return
    }
    const str = JSON.stringify(profile)
    localStorage.setItem('profile', str)
}

export const useProfile = () => {
    const [profile, setProfile] = useState<Profile | null>(null)

    useEffect(() => {
        setProfile(getStorageProfile())
    }, [])

    useEffect(() => {
        saveStorageProfile(profile)
    }, [profile])

    return {
        profile,
        setProfile
    }
}