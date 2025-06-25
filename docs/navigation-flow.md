# Champion Story Navigation Flow

This document explains how users navigate from the browse champions page to individual champion story details.

## Navigation Flow

### 1. Browse Champions Page (`/browse-champions`)
- **Component**: `CauseChampionsPage` (`src/components/champions/browseChampions.tsx`)
- Displays cards of verified cause champions
- Each card shows champion summary information

### 2. Card Interaction
Users can click on a champion in two ways:

#### Option A: Click anywhere on the card
```typescript
<div
  onClick={() => navigate(`/champion-story/${champion.id}`)}
  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
>
```

#### Option B: Click "View Details" button
```typescript
<button 
  onClick={(e) => {
    e.stopPropagation(); // Prevent card click event
    navigate(`/champion-story/${champion.id}`);
  }}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg"
>
  View Details
</button>
```

### 3. Route Navigation
Both interactions navigate to: `/champion-story/${champion.id}`

### 4. Champion Story Detail Page (`/champion-story/:id`)
- **Route**: Defined in `App.tsx`
- **Component**: `ChampionStoryDetail` (`src/pages/ChampionStoryDetail.tsx`)
- **Purpose**: Container component that fetches data and handles routing

### 5. Data Fetching Process

```typescript
const ChampionStoryDetail = () => {
  const { id } = useParams(); // Extract champion ID from URL
  const [championStory, setChampionStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampionStory = async () => {
      try {
        // Try to fetch from backend API
        const data = await championStoriesAPI.getStoryById(id);
        setChampionStory(data);
      } catch (error) {
        // Fallback to sample data in development
        if (import.meta.env.DEV) {
          const sampleStory = sampleChampionStories.find(story => story.id === id);
          setChampionStory(sampleStory);
        }
      }
    };
    
    fetchChampionStory();
  }, [id]);

  return (
    <ChampionStoryPage 
      championStory={championStory}
      loading={loading}
      onBack={() => navigate('/browse-champions')}
    />
  );
};
```

### 6. Champion Story Display
- **Component**: `ChampionStoryPage` (`src/components/champions/championStories.tsx`)
- **Purpose**: Pure presentation component that displays the full champion story
- **Features**:
  - Loading states
  - Error handling
  - Back navigation
  - Follow/unfollow functionality
  - Impact statistics
  - Campaign timeline
  - Updates and milestones

## Complete User Journey

```
1. User visits /browse-champions
   ↓
2. User sees champion cards with summary info
   ↓
3. User clicks card or "View Details" button
   ↓
4. Navigation to /champion-story/[id]
   ↓
5. ChampionStoryDetail component loads
   ↓
6. Data fetched from backend (or sample data)
   ↓
7. ChampionStoryPage displays full story
   ↓
8. User can click "Back" to return to browse page
```

## Backend API Integration

The system expects these API endpoints:

```typescript
GET /api/champion-stories/:id     // Get single champion story
POST /api/champions/:id/follow    // Follow champion
DELETE /api/champions/:id/follow  // Unfollow champion
```

## Error Handling

- **Loading State**: Shows spinner while fetching data
- **Network Error**: Falls back to sample data in development
- **Not Found**: Shows friendly error message with retry option
- **Back Navigation**: Always provides way to return to champions list

## Development Mode Features

- **Sample Data Fallback**: If API fails, uses predefined sample stories
- **Graceful Degradation**: App continues to work even without backend
- **Error Boundaries**: Prevents crashes from propagating

## URL Structure

```
/browse-champions              # Main champions listing
/champion-story/1             # Priya Sharma's education story
/champion-story/2             # Dr. Patel's medical story  
/champion-story/3             # Kavitha's environment story
```

This architecture provides a smooth, professional user experience while maintaining clean separation of concerns between data fetching, routing, and presentation. 