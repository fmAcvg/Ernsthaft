import { useState } from 'react';
import { Avatar } from '@mantine/core';
import {AppShell, Burger, Center, Header, MediaQuery, Navbar, Text, useMantineTheme, Title, MantineShadow} from '@mantine/core';
import { AspectRatio, Image } from '@mantine/core';
import { Modal, Button, Group } from '@mantine/core';
import { Grid } from '@mantine/core';
import {left} from "@popperjs/core";
import { Star } from 'tabler-icons-react';
import { MantineProvider } from '@mantine/core';
import { Drawer} from '@mantine/core';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

export default function Demo(){
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const [opened_nav, setOpened2_nav] = useState(false);
    return (
        <MantineProvider
            theme={{
                fontSizes: {
                    xs: 5, sm: 10, md: 15, lg: 20, xl: 150
                },
                shadows: {
                    xs: '1px 1px 1px rgba(0, 0, 0, 0.3)',
                    sm: '1px 1px 4px rgba(0, 0, 0, 0.4)',
                    md: '3px 3px 4px rgba(0, 0, 0, 0.4)',
                    lg: '3px 3px 4px 5px rgba(0, 0, 0, 0.4)',
                    xl: '3px 3px 4px 15px rgba(0, 0, 0, 0.4)',
                },
            }}
        >
        <AppShell
            style={{width:"100%",overflowX:"hidden"}}

            // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
            navbarOffsetBreakpoint="sm"

            // fixed prop on AppShell will be automatically added to Header and Navbar
            fixed
            header={

                <Header height={40} p="md" shadow="1px 3px 4px rgba(0, 0, 0, 0.4)">
                    <Button onClick={() => setOpened(true)} style={{height:"80%",width:"7%",position:"absolute", right:"8px", top:"4px"}} component="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/mantinedev"
                            leftIcon={<Avatar radius={"xl"} size={25}></Avatar>}
                            styles={(theme) => ({
                                root: {
                                    backgroundColor: '#00acee',
                                    border: 0,
                                    height: 42,
                                    paddingLeft: 5,
                                    paddingRight: 0,

                                    '&:hover': {
                                        backgroundColor: theme.fn.darken('#00acee', 0.05),
                                    },
                                },

                                leftIcon: {
                                    marginRight: 15,
                                },
                            })}>Anmelden</Button>
                    <Drawer
                        opened={opened}
                        onClose={() => setOpened(false)}
                        title="Register"
                        padding="xl"
                        size="xl"
                    >
                        {/* Drawer content */}
                    </Drawer>
                    {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>

                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[2]}
                                mr="xl"
                            ></Burger>

                        <Text
                            component="span"
                            align="center"
                            variant="gradient"
                            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                            size="lg"
                            weight={600}
                            style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                        >
                            SCHÜLERZEITUNG
                        </Text>

                        <Center style={{ width: 1400, height: 200 }}>
                            <ActionIcon
                                variant="outline"
                                color={dark ? 'yellow' : 'blue'}
                                onClick={() => toggleColorScheme()}
                                title="Toggle color scheme"
                            >{dark ? <Sun size={18} /> : <MoonStars size={18} />}
                            </ActionIcon>
                        </Center>

                    </div>
                </Header>
            }
        >
            <Center style={{ width: 1880, height: 620 }}>
    <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={900}
        style={{ fontFamily: 'Greycliff CF, sans-serif' }}
    >
        ERNSTHAFT!?
    </Text>
                </Center>
            <Center style={{width:"100%", position:"absolute", top:"600px", overflowX:"hidden", left:"0px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{}}><path fill="#a2d9ff" fill-opacity="1" d="M0,256L40,266.7C80,277,160,299,240,261.3C320,224,400,128,480,122.7C560,117,640,203,720,213.3C800,224,880,160,960,149.3C1040,139,1120,181,1200,208C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </Center>

        </AppShell>
        </MantineProvider>


    );
}
