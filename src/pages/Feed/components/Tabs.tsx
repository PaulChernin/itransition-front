import { Tabs as ChakraTabs, Tab, TabList } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"

const tabs = [ // в отдельный файл
    {
        label: 'best',
        route: '/feed/best'
    },
    {
        label: 'new',
        route: '/feed/latest'
    },
    {
        label: 'tags',
        route: '/feed/tags'
    }
]

const Tabs = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()

    return <>
        <ChakraTabs
            index={tabs.findIndex(tab => tab.route === pathname)}
            onChange={index => navigate(tabs[index].route)}
            marginBottom={3}
        >
            <TabList>
                {tabs.map(tab =>
                    <Tab key={tab.route}>
                        {t(tab.label)}
                    </Tab>    
                )}
            </TabList>
        </ChakraTabs>
    </>
}

export default Tabs