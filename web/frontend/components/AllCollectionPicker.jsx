import React, { useState, useCallback, useEffect } from 'react';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import { Modal, TextContainer } from '@shopify/polaris';

function AllCollectionPicker({ onSelectCollection, isOpen, onClose, allowMultiple, selectedCollections }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(selectedCollections);
  }, [selectedCollections]);

  const handleSelection = useCallback((resources) => {
    const selectedResources = resources.selection;
    setResources(selectedResources);
    onSelectCollection(selectedResources);
    onClose();
  }, [onSelectCollection, onClose]);

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <ResourcePicker
        resourceType="Collection"
        open={isOpen}
        onSelection={handleSelection}
        onCancel={handleCancel}
        allowMultiple={allowMultiple}
        selectedResources={resources.map(resource => resource.id)}
      />
    </>
  );
}

export default AllCollectionPicker;
