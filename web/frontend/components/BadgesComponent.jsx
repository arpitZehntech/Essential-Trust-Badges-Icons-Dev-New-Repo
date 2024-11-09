// import React, { useState } from 'react';
// import { Button, Card, Spinner } from '@shopify/polaris';

// const BadgesComponent = () => {
//   const [badges, setBadges] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch('/api/badges'); // Fetch data from your backend
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       console.log('data------', data);

//       setBadges(data);
//     } catch (error) {
//       console.error('Failed to fetch reviews:', error);
//     }
//   };

//   return (
//     <Card title="Badges">
//       <Button onClick={fetchReviews} primary>
//         {loading ? <Spinner /> : 'Fetch Badges'}
//       </Button>

//       <div style={{ marginTop: '20px' }}>
//         {badges.length > 0 ? (
//           <ul>
//             {badges.map((badge) => (
//               <li key={badge.id}>{badge.badge_name} - {badge.badge_type}</li>
//             ))}
//           </ul>
//         ) : (
//           !loading && <p>No badges found.</p>
//         )}
//       </div>
//     </Card>
//   );
// };

// export default BadgesComponent;


import React, { useState } from 'react';
import { Button, Card, TextField, FormLayout, Spinner } from '@shopify/polaris';

const BadgesComponent = () => {
    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedBadgeId, setSelectedBadgeId] = useState(null);

    const [badgeData, setBadgeData] = useState({
        badge_name: '',
        badge_type: '',
        status: '',
        badge_pages: [{ title: '', subheading: '', icon_name: '', call_to_action: '', button_text: '' }]
    });

    const fetchBadges = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/badges');
            const data = await response.json();
            console.log("Fetched badges data:", data);
            setBadges(data);
        } catch (error) {
            console.error('Error fetching badges:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBadgeChange = (field, value) => {
        setBadgeData({ ...badgeData, [field]: value });
    };

    const handlePageChange = (index, field, value) => {
        const updatedPages = badgeData.badge_pages.map((page, i) =>
            i === index ? { ...page, [field]: value } : page
        );
        setBadgeData({ ...badgeData, badge_pages: updatedPages });
    };

    const addPage = () => {
        setBadgeData({
            ...badgeData,
            badge_pages: [...badgeData.badge_pages, { title: '', subheading: '', icon_name: '', call_to_action: '', button_text: '' }]
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = isEditing
                ? await fetch(`/api/badges/${selectedBadgeId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(badgeData)
                })
                : await fetch('/api/badges', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(badgeData)
                });
            
            if (response.ok) {
                console.log(isEditing ? "Badge updated successfully" : "Badge saved successfully");
                resetForm();
                fetchBadges(); // Refresh the list after saving
            } else {
                console.error("Failed to save badge");
            }
        } catch (error) {
            console.error("Error saving badge:", error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setBadgeData({
            badge_name: '',
            badge_type: '',
            status: '',
            badge_pages: [{ title: '', subheading: '', icon_name: '', call_to_action: '', button_text: '' }]
        });
        setIsEditing(false);
        setSelectedBadgeId(null);
    };

    const handleEdit = (badge) => {
        setBadgeData(badge);
        setSelectedBadgeId(badge.id);
        setIsEditing(true);
    };

    // Function to delete a badge
    const deleteBadge = async (id) => {
        if (window.confirm("Are you sure you want to delete this badge?")) {
            setLoading(true);
            try {
                const response = await fetch(`/api/badges/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    console.log("Badge deleted successfully");
                    fetchBadges(); // Refresh the list after deletion
                } else {
                    console.error("Failed to delete badge");
                }
            } catch (error) {
                console.error("Error deleting badge:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Card title="Badges">
            <Button onClick={fetchBadges} primary>
                {loading ? <Spinner /> : 'Fetch Badges'}
            </Button>

            <div style={{ marginTop: '20px' }}>
                {badges.length > 0 ? (
                    <>
                        {/* First Table for Badge Information */}
                        <h2>Badge Information</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Badge Name</th>
                                    <th>Badge Type</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {badges.map((badge) => (
                                    <tr key={badge.id}>
                                        <td>{badge.badge_name}</td>
                                        <td>{badge.badge_type}</td>
                                        <td>{badge.status}</td>
                                        <td>
                                            <Button onClick={() => handleEdit(badge)}>Edit</Button>
                                            <Button onClick={() => deleteBadge(badge.id)} destructive>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Second Table for Badge Pages Information */}
                        <h2>Badge Pages Information</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Badge Name</th>
                                    <th>Page Title</th>
                                    <th>Subheading</th>
                                    <th>Icon Name</th>
                                    <th>Call to Action</th>
                                    <th>Button Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {badges.map((badge) => (
                                    badge.badge_pages && badge.badge_pages.length > 0 ? (
                                        badge.badge_pages.map((page) => (
                                            <tr key={page.id}>
                                                <td>{badge.badge_name}</td>
                                                <td>{page.title}</td>
                                                <td>{page.subheading}</td>
                                                <td>{page.icon_name}</td>
                                                <td>{page.call_to_action}</td>
                                                <td>{page.button_text}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr key={`no-pages-${badge.id}`}>
                                            <td colSpan={6}>No Pages Available for {badge.badge_name}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    !loading && <p>No badges found.</p>
                )}
            </div>

            <FormLayout>
                <TextField label="Badge Name" value={badgeData.badge_name} onChange={(value) => handleBadgeChange('badge_name', value)} />
                <TextField label="Badge Type" value={badgeData.badge_type} onChange={(value) => handleBadgeChange('badge_type', value)} />
                <TextField label="Status" value={badgeData.status} onChange={(value) => handleBadgeChange('status', value)} />

                {badgeData.badge_pages.map((page, index) => (
                    <div key={index} style={{ border: '1px solid #e0e0e0', padding: '10px', margin: '10px 0' }}>
                        <TextField label="Title" value={page.title} onChange={(value) => handlePageChange(index, 'title', value)} />
                        <TextField label="Subheading" value={page.subheading} onChange={(value) => handlePageChange(index, 'subheading', value)} />
                        <TextField label="Icon Name" value={page.icon_name} onChange={(value) => handlePageChange(index, 'icon_name', value)} />
                        <TextField label="Call to Action" value={page.call_to_action} onChange={(value) => handlePageChange(index, 'call_to_action', value)} />
                        <TextField label="Button Text" value={page.button_text} onChange={(value) => handlePageChange(index, 'button_text', value)} />
                    </div>
                ))}

                <Button onClick={addPage}>Add Another Page</Button>
                <Button onClick={handleSubmit} primary loading={loading}>
                    {isEditing ? 'Update Badge' : 'Save Badge'}
                </Button>
            </FormLayout>
        </Card>
    );
};

export default BadgesComponent;
