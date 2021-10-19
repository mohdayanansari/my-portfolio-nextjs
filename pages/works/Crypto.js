import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Crypto App <Badge>2021-</Badge>
      </Title>
      <P>
        A Crypto App show all the data about Crypto Currencies.<br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cryptoniansworld.netlify.app/">
          https://cryptoniansworld.netlify.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="/">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ullam! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/crypto.png" alt="Crypto" />
      <WorkImage src="/images/works/crypto.png" alt="Crypto" />
    </Container>
  </Layout>
)

export default Work
