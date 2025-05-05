import DashboardForumsTopic from '@/components/DashboardForumsTopic';

export default function DashboardForumsTopicPage({ params }: { params: { id: string } }) {
    return <DashboardForumsTopic topicId={params.id} />
};