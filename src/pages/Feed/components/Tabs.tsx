import { Tabs as ChakraTabs, Tab, TabList } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"

const tabs = [
    {
        label: 'Best',
        route: '/feed/best'
    },
    {
        label: 'New',
        route: '/feed/latest'
    }
]

const Tabs = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    return <>
        <ChakraTabs
            index={tabs.findIndex(tab => tab.route === pathname)}
            onChange={index => navigate(tabs[index].route)}
        >
            <TabList>
                {tabs.map(tab =>
                    <Tab key={tab.route}>
                        {tab.label}
                    </Tab>    
                )}
            </TabList>
        </ChakraTabs>
    </>
}

export default Tabs