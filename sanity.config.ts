/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, StudioLogo } from 'sanity'
import { deskTool } from 'sanity/desk'



// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion } from './sanity/env'
import { schema } from './sanity/schema'

import StudioNavbar from '@/components/StudioNavbar'


export default defineConfig({
  basePath: '/studio',
  name: "resto",
  title: "resto",
  projectId: '5w36l5j8',
  dataset:'production',
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio:{
    components:{
      // logo:Logo,
       navbar:StudioNavbar,
    }
  },

})
