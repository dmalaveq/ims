import { Box } from "@chakra-ui/react"

const Layout: React.FC = ({ children }) => {
    return (
        <Box as="main">
            {children}
        </Box>
    )
}

export default Layout