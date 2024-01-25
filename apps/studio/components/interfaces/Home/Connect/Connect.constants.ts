export type ConnectionType = {
  key: string
  icon: string
  label: string
  files: File[]
  guideLink?: string
  children: ConnectionType[]
}

export type File = {
  location: string // location on the filesystem
  destinationFilename: string // where the user should put the file
  destinationLocation: string // label for the ui
}

export const FRAMEWORKS: ConnectionType[] = [
  {
    key: 'nextjs',
    label: 'Next.JS',
    icon: 'nextjs',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/nextjs',
    files: [],
    children: [
      {
        key: 'app',
        label: 'App router',
        icon: '',
        files: [],
        children: [
          {
            key: 'supabasejs',
            label: 'supabase-js',
            icon: 'supabase',
            children: [],
            files: [
              {
                // omit .tsx extension
                location: 'nextjs/app/supabasejs/env.local', // location on local disk
                destinationLocation: '.env.local', // label for the ui
                destinationFilename: '.env.local', // where the user should put the file
              },
              {
                location: 'nextjs/app/supabasejs/page',
                destinationLocation: 'app/page.tsx',
                destinationFilename: 'page.tsx',
              },
              {
                location: 'nextjs/app/supabasejs/server',
                destinationLocation: 'utils/supabase/server.ts',
                destinationFilename: 'server.ts',
              },
              {
                location: 'nextjs/app/supabasejs/client',
                destinationLocation: 'utils/supabase/client.ts',
                destinationFilename: 'client.ts',
              },
              {
                location: 'nextjs/app/supabasejs/middleware',
                destinationLocation: 'utils/supabase/middleware.ts',
                destinationFilename: 'middleware.ts',
              },
            ],
          },
        ],
      },
      {
        key: 'pages',
        label: 'Pages router',
        icon: '',
        files: [],
        children: [
          {
            key: 'supabasejs',
            label: 'Supabase-js',
            children: [],
            icon: 'supabase',
            files: [
              {
                // omit .tsx extension
                location: 'nextjs/pages/supabasejs/env.local', // location on local disk
                destinationLocation: '.env.local', // label for the ui
                destinationFilename: '.env.local', // where the user should put the file
              },
              {
                location: 'nextjs/pages/supabasejs/supabase',
                destinationLocation: 'utils/supabase.ts',
                destinationFilename: 'supabase.ts',
              },
              {
                location: 'nextjs/pages/supabasejs/app',
                destinationLocation: '_app.tsx',
                destinationFilename: '_app.tsx',
              },
            ],
          },

          {
            key: 'postgresjs',
            label: 'pages Postgres.js',
            icon: 'postgres',
            children: [],
            files: [
              {
                // omit .tsx extension
                location: 'pages-postgresjs/env.local',
                destinationFilename: 'pages-postgresjs.env.local',
                destinationLocation: 'pages-postgresjs/.env.local',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'react',
    label: 'React',
    icon: 'react',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/reactjs',
    files: [],
    children: [
      {
        key: 'supabasejs',
        label: 'Supabase-js',
        children: [],
        icon: 'supabase',
        files: [
          {
            // omit .tsx extension
            location: 'react/supabasejs/env.local', // location on local disk
            destinationLocation: '.env.local', // label for the ui
            destinationFilename: '.env.local', // where the user should put the file
          },
          {
            location: 'react/supabasejs/supabase',
            destinationLocation: 'utils/supabase.ts',
            destinationFilename: 'supabase.ts',
          },
          {
            location: 'react/supabasejs/app',
            destinationLocation: 'App.tsx',
            destinationFilename: 'App.tsx',
          },
        ],
      },
    ],
  },
  {
    key: 'nuxt',
    label: 'Nuxt',
    icon: 'nuxt',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs',
    files: [],
    children: [
      {
        key: 'supabasejs',
        label: 'Supabase-js',
        children: [],
        icon: 'supabase',
        files: [
          {
            // omit .tsx extension
            location: 'nuxt/supabasejs/env.local', // location on local disk
            destinationLocation: '.env.local', // label for the ui
            destinationFilename: '.env.local', // where the user should put the file
          },
          {
            location: 'nuxt/supabasejs/supabase',
            destinationLocation: 'utils/supabase.ts',
            destinationFilename: 'supabase.ts',
          },
          {
            location: 'nuxt/supabasejs/app',
            destinationLocation: 'src/App.vue',
            destinationFilename: 'App.vue',
          },
        ],
      },
    ],
  },
  {
    key: 'vuejs',
    label: 'Vue.JS',
    icon: 'vuejs',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/vue',
    files: [],
    children: [
      {
        key: 'supabasejs',
        label: 'Supabase-js',
        children: [],
        icon: 'supabase',
        files: [
          {
            // omit .tsx extension
            location: 'vue/supabasejs/env.local', // location on local disk
            destinationLocation: '.env.local', // label for the ui
            destinationFilename: '.env.local', // where the user should put the file
          },
          {
            location: 'vue/supabasejs/supabase',
            destinationLocation: 'utils/supabase.ts',
            destinationFilename: 'supabase.ts',
          },
          {
            location: 'vue/supabasejs/app',
            destinationLocation: 'src/App.vue',
            destinationFilename: 'App.vue',
          },
        ],
      },
    ],
  },

  {
    key: 'sveltekit',
    label: 'SvelteKit',
    icon: 'sveltekit',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit',
    files: [],
    children: [
      {
        key: 'supabasejs',
        label: 'Supabase-js',
        children: [],
        icon: 'supabase',
        files: [
          {
            // omit .tsx extension
            location: 'sveltekit/supabasejs/env.local',
            destinationFilename: '.env.local',
            destinationLocation: '.env.local',
          },
          {
            location: 'sveltekit/supabasejs/supabase',
            destinationLocation: 'src/lib/supabaseClient.js',
            destinationFilename: 'supabase.js',
          },
          {
            // omit .tsx extension
            location: 'sveltekit/supabasejs/server',
            destinationFilename: '+page.server.js',
            destinationLocation: 'src/routes/+page.server.js',
          },
          {
            // omit .tsx extension
            location: 'sveltekit/supabasejs/page',
            destinationFilename: '+page.server.js',
            destinationLocation: 'src/routes/+page.server.js',
          },
        ],
      },
    ],
  },
  {
    key: 'solidjs',
    label: 'Solid.js',
    icon: 'solidjs',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/solidjs',
    files: [],
    children: [
      {
        key: 'supabasejs',
        label: 'Supabase-js',
        children: [],
        icon: 'supabase',
        files: [
          {
            // omit .tsx extension
            location: 'solidjs/supabasejs/env.local',
            destinationFilename: '.env.local',
            destinationLocation: '.env.local',
          },
          {
            location: 'solidjs/supabasejs/supabase',
            destinationLocation: 'utils/supabase.ts',
            destinationFilename: 'supabase.ts',
          },
          {
            // omit .tsx extension
            location: 'solidjs/supabasejs/app',
            destinationFilename: 'App.tsx',
            destinationLocation: 'src/App.jsx',
          },
        ],
      },
    ],
  },
  {
    key: 'redwoodjs',
    label: 'RedwoodJS',
    icon: 'redwoodjs',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs',
    children: [],
    files: [
      {
        // omit .tsx extension
        location: 'vue1/env.local',
        destinationFilename: 'vue1.env.local',
        destinationLocation: 'vue1/.env.local',
      },
    ],
  },
  {
    key: 'refine',
    label: 'refine',
    icon: 'refine',
    guideLink: 'https://supabase.com/docs/guides/getting-started/quickstarts/refine',
    files: [],
    children: [
      {
        key: 'supabasejs',
        label: 'Supabase-js',
        children: [],
        icon: 'supabase',
        files: [
          {
            // omit .tsx extension
            location: 'refine/supabasejs/env.local',
            destinationFilename: 'env.local',
            destinationLocation: '.env.local',
          },
          {
            // omit .tsx extension
            location: 'refine/supabasejs/supabase',
            destinationFilename: 'supabase.tsx',
            destinationLocation: 'utility/supabase.tsx',
          },
        ],
      },
    ],
  },
]

export const ORMS: ConnectionType[] = [
  {
    key: 'prisma',
    label: 'Prisma',
    icon: 'prisma',
    guideLink: 'https://supabase.com/partners/integrations/prisma',
    children: [],
    files: [
      {
        // omit .tsx extension
        location: 'prisma/env',
        destinationFilename: '.env',
        destinationLocation: '.env',
      },
      {
        // omit .tsx extension
        location: 'prisma/schema.prisma',
        destinationFilename: 'schema.prisma',
        destinationLocation: 'schema.prisma',
      },
    ],
  },
  {
    key: 'drizzle',
    label: 'Drizzle',
    icon: 'drizzle',
    guideLink:
      'https://supabase.com/docs/guides/database/connecting-to-postgres#connecting-with-drizzle',
    children: [],
    files: [
      {
        // omit .tsx extension
        location: 'drizzle/env',
        destinationFilename: '.env',
        destinationLocation: '.env',
      },
      {
        // omit .tsx extension
        location: 'drizzle/schema',
        destinationFilename: 'schema.tsx',
        destinationLocation: 'schema.tsx',
      },
      {
        // omit .tsx extension
        location: 'drizzle/index',
        destinationFilename: 'index.tsx',
        destinationLocation: 'index.tsx',
      },
    ],
  },
]

// @todo
// maybe we need a "command?" prop for files
// ie: it's not a file, but a terminal command
export const GRAPHQL: ConnectionType[] = [
  {
    key: 'graphql',
    label: 'GraphQL',
    icon: 'graphql',
    guideLink: 'https://supabase.com/docs/guides/graphql',
    children: [],
    files: [
      {
        // omit .tsx extension
        location: 'graphql/terminal',
        destinationFilename: '',
        destinationLocation: '',
      },
    ],
  },
]

// move this to /tests/
// having duplicate keys will mess up the tabs and dropdowns
// check that each item has a unique top-level item
// example: frameworks need to be unique: next/react/vue/svelte/nuxt/etc
function checkParentsForDuplicates(item: ConnectionType[]) {
  const topLevelKeys = new Set()
  let hasDuplicates = false
  let duplicateKey = null

  item.forEach((item: ConnectionType, i: number) => {
    const key = item.key
    if (topLevelKeys.has(key)) {
      hasDuplicates = true
      duplicateKey = key
      console.error(`Duplicate keys found: ${duplicateKey}`)
    } else {
      topLevelKeys.add(key)
    }
  })

  if (hasDuplicates) {
    throw new Error(`Duplicate keys found. Each top-level item must be unique.`)
  }
}

export const CONNECTION_TYPES = [
  { key: 'frameworks', label: 'App Frameworks', obj: FRAMEWORKS },
  { key: 'orms', label: 'ORMs', obj: ORMS },
  { key: 'graphql', label: 'GraphQL', obj: GRAPHQL },
]

// Call the function with the GRAPHQL item
CONNECTION_TYPES.map((item) => item.obj).map((item) => checkParentsForDuplicates(item))
