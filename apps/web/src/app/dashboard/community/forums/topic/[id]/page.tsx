import DashboardForumsTopic from '@/components/Dashboard/ForumsTopic';

export default function DashboardForumsTopicPage({ params }: { params: { id: string } }) {
    return <DashboardForumsTopic topicId={params.id} />
};