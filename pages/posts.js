import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumb from "../public/images/links/thumb.jpg";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            thumbnail={thumb}
            href="/"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumb}
            href="/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="lorem asdjkhba ajhsd asjkh kjahh dj asdjh"
            thumbnail={thumb}
            href="/"
          />
          <GridItem
            title="I stopped setting a bla blaa blaa"
            thumbnail={thumb}
            href="/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumb}
            href="/"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb}
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
