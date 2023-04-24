import {
  Header,
  Table,
  Link,
  Button,
  Box,
  TextFilter,
  Pagination,
  PropertyFilter,
  CollectionPreferences,
  SpaceBetween,
} from '@cloudscape-design/components';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

function EmptyState({ title, subtitle, action }) {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{ bottom: 's' }} color="inherit">
        {subtitle}
      </Box>
      {action}
    </Box>
  );
};

export default function Go() {
  const [selectedItemsGo, setSelectedItemsGo] = useState([{
    topic: 'Basics',
    level: 'Beginner',
    createdAt: Date.now(),
    lastUpdate: Date.now(),
  }]);
  const [preferences, setPreferences] = useState({
    pageSize: 5,
    visibleContent: ['created', 'lastView', 'collection', 'totalCards', 'category', 'description'],
  });
  const [tutorialItems, setTutorialItems] = useState([
    {
      topic: 'Basics',
      level: 'Beginner',
      createdAt: Date.now(),
      lastUpdate: Date.now(),
    }
  ]);

  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
    tutorialItems,
    {
      filtering: {
        empty: (
          <EmptyState
            title={
              <FormattedMessage
                id="flashcards.empty.title"
                defaultMessage="No collections"
                description=""
              />
            }
            subtitle={
              <FormattedMessage
                id="flashcards.empty.subtitle"
                defaultMessage="No card collections to display. Sorry! Try creating a new collection first."
                description=""
              />
            }
            action={
              <Button
                variant="primary"
                // onClick={onCreateNewCollection}
              >
                <FormattedMessage
                  id="flashcards.empty.createCollectionButton"
                  defaultMessage="Create collection"
                  description=""
                />
              </Button>
            }
          />
        ),
        noMatch: (
          <EmptyState
            title={
              <FormattedMessage
                id="flashcards.noMatches.title"
                defaultMessage="No matches"
                description=""
              />
            }
            subtitle={
              <FormattedMessage
                id="flashcards.noMatches.subtitle"
                defaultMessage="We can't find a card collection that matches that description."
                description=""
              />
            }
            action={
              <Button
                onClick={() => actions.setFiltering('')}
              >
                <FormattedMessage
                  id="flashcards.noMatches.clearFilterButton"
                  defaultMessage="Clear filter"
                  description=""
                />
              </Button>
            }
          />
        ),
      },
      pagination: { pageSize: preferences.pageSize },
      sorting: {
        defaultState: {
          sortingColumn: {
            sortingField: 'lastView',
          },
          isDescending: true,
        }
      },
      selection: {},
    }
  )

  return (
    <>
      <Header
        variant="h1"
      >
        Go
      </Header>
      <Table
        {...collectionProps}
        onSelectionChange={({ detail }) => setSelectedItemsGo(detail.selectedItems)}
        selectedItems={selectedItemsGo}
        columnDefinitions={[
          {
            id: 'topic',
            header: 'Topic',
            cell: e => (
              <Link href={`/tutorials/go/${e.topic}`}>
                {e.topic}
              </Link>
            ),
            sortingField: 'topic',
          },
          {
            id: 'level',
            header: 'Level',
            cell: e => e.level,
            sortingField: 'level',
          },
          {
            id: 'createdAt',
            header: 'Date Created',
            cell: e => e.createdAt,
            sortingField: 'createdAt',
          },
          {
            id: 'lastUpdate',
            header: 'Last Updated',
            cell: e => e.lastUpdate,
            sortingField: 'lastUpdate',
          },
        ]}
        items={items}
        wrapLines
        loadingText="Loading tutorials..."
        // selectionType="single"
        visibleColumns={[
          'topic',
          'level',
          'createdAt',
          'lastUpdate',
        ]}
        filter={
          <TextFilter
            {...filterProps}
            countText={'0'}
            filteringPlaceholder="Search tutorials..."
          />
        }
        header={
          <Header
            variant="h2"
            // actions={}
          >
            <FormattedMessage
              id="go.table.header"
              defaultMessage="All Go tutorials"
            />
          </Header>
        }
        pagination={
          <Pagination
            {...paginationProps}
            ariaLabels={{
              nextPageLabel: "Next page",
              previousPageLabel: "Previous page",
              pageLabel: pageNumber =>
                `Page ${pageNumber} of all pages`
            }}
          />
        }
        preferences={
          <CollectionPreferences
            title="Go tutorials"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={preferences}
            onConfirm={({ detail }) => setPreferences(detail)}
            pageSizePreference={{
              title: (
                <FormattedMessage
                  id="go.preferences.pageSizePreferences.title"
                  defaultMessage="Select page size"
                  description=""
                />
              ),
              options: [
                { value: 5, label: (
                  <FormattedMessage
                    id="go.preferences.pageSizePreferences.options.5tutorials"
                    defaultMessage="5 Tutorials"
                    description=""
                  />
                ) },
                { value: 10, label: (
                  <FormattedMessage
                    id="go.preferences.pageSizePreferences.options.10tutorials"
                    defaultMessage="10 Tutorials"
                    description=""
                  />
                ) },
                { value: 15, label: (
                  <FormattedMessage
                    id="go.preferences.pageSizePreferences.options.15tutorials"
                    defaultMessage="15 Tutorials"
                    description=""
                  />
                ) },
                { value: 20, label: (
                  <FormattedMessage
                    id="go.preferences.pageSizePreferences.options.20tutorials"
                    defaultMessage="20 Tutorials"
                    description=""
                  />
                ) },
              ]
            }}
            visibleContentPreference={{
              title: (
                <FormattedMessage
                  id="go.preferences.visibleContent.title"
                  defaultMessage="Select visible content"
                />
              ),
              options: {
                label: 'Main Distribution Properties',
                options: [
                  {
                    id: 'topic',
                    label: 'Topic'
                  },
                  {
                    id: 'level',
                    label: 'Level'
                  },
                  {
                    id: 'createdAt',
                    label: 'Date Created'
                  },
                  {
                    id: 'lastUpdate',
                    label: 'Last Updated'
                  }
                ]
              }
            }}
          />
        }
      />
    </>
  )
}