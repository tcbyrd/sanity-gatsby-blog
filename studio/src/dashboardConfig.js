export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edfcc766e677135ebac4c3c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6fkqiyqx',
                  apiId: '76eddef2-bf6f-415f-8138-d58f7096b82e'
                },
                {
                  buildHookId: '5edfcc76c3308a9ac7a56560',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a8rd4uvv',
                  apiId: '6194ad8b-1b1f-4d6b-9abc-3e8160690d3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tcbyrd/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a8rd4uvv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
