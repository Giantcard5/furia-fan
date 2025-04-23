'use client';

import React, {
    useState,
    useRef
} from 'react';

import styled from 'styled-components';

import {
    Upload,
    File,
    ImageIcon,
    X,
    AlertCircle,
    CheckCircle
} from 'lucide-react';

import {
    Button
} from '@/components/UI/button';
import {
    Progress
} from '@/components/UI/progress';

const UploaderContainer = styled.div`
    width: 100%;
`;

const DropZone = styled.div<{ isDragActive: boolean; hasError: boolean; disabled: boolean }>`
    position: relative;
    border: 2px dashed ${({ isDragActive, hasError, theme }) =>
        hasError ? theme.colors.red : isDragActive ? theme.colors.white : theme.colors.gray[700]};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.space[6]};
    transition: ${({ theme }) => theme.transitions.default};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    background-color: ${({ isDragActive, hasError, theme }) =>
        hasError ? `rgba(239, 68, 68, 0.05)` : isDragActive ? `rgba(255, 255, 255, 0.05)` : 'transparent'};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    
    &:hover {
        border-color: ${({ hasError, disabled, theme }) =>
        hasError ? theme.colors.red : disabled ? theme.colors.gray[700] : theme.colors.white};
        background-color: ${({ hasError, disabled, theme }) =>
        hasError ? `rgba(239, 68, 68, 0.05)` : disabled ? 'transparent' : `rgba(255, 255, 255, 0.05)`};
    }
`;

const DropZoneContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const IconWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const DropZoneText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.white};
`;

const DropZoneSubText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[400]};
    
    span {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const DropZoneInfo = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-top: ${({ theme }) => theme.space[1]};
`;

const FilePreviewContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[3]};
`;

const ImagePreview = styled.div`
    position: relative;
    width: 100%;
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.gray[800]};
    border-radius: ${({ theme }) => theme.radii.md};
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.space[3]};
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const FileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space[3]};
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ theme }) => theme.colors.gray[800]};
`;

const FileDetails = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    overflow: hidden;
`;

const FileIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
`;

const FileTextInfo = styled.div`
    overflow: hidden;
`;

const FileName = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const FileSize = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const ProgressContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[3]};
`;

const ProgressInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ProgressText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const ProgressValue = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.white};
`;

const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    margin-top: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const SuccessMessage = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    margin-top: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.gold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
`;

interface FileUploaderProps {
    value: any;
    onChange: (file: File | null) => void;
    accept?: string;
    maxSize?: number;
    disabled?: boolean;
};

export function FileUploader({
    value,
    onChange,
    accept = '*/*',
    maxSize = 5 * 1024 * 1024,
    disabled = false,
}: FileUploaderProps) {
    const [dragActive, setDragActive] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        };
    };

    const validateFile = (file: File): boolean => {
        if (file.size > maxSize) {
            setError(`File size exceeds ${maxSize / (1024 * 1024)}MB limit`);
            return false;
        };

        if (accept !== '*/*') {
            const fileType = file.type;
            const acceptedTypes = accept.split(',');

            if (
                !acceptedTypes.some((type) => {
                    if (type.includes('/*')) {
                        const mainType = type.split('/')[0];
                        return fileType.startsWith(`${mainType}/`);
                    }
                    return type === fileType;
                })
            ) {
                setError(`File type not accepted. Please upload ${accept}`);
                return false;
            };
        };

        setError(null);
        return true;
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (disabled) return;

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];

            if (validateFile(file)) {
                simulateUpload(file);
            };
        };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (disabled) return;

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            if (validateFile(file)) {
                simulateUpload(file);
            };
        };
    };

    const simulateUpload = (file: File) => {
        setUploadProgress(0);

        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onChange(file);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);
    };

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        };
    };

    const removeFile = () => {
        onChange(null);
        setUploadProgress(0);
        if (inputRef.current) {
            inputRef.current.value = '';
        };
    };

    const getFileIcon = () => {
        if (!value) return null;

        const fileType = value.type || '';

        if (fileType.startsWith('image/')) {
            return <ImageIcon size={24} />;
        };

        return <File size={24} />;
    };

    const getFilePreview = () => {
        if (!value) return null;

        const fileType = value.type || '';

        if (fileType.startsWith('image/')) {
            return (
                <ImagePreview>
                    <img src={URL.createObjectURL(value) || '/placeholder.svg'} alt='Preview' />
                </ImagePreview>
            );
        };

        return null;
    };

    return (
        <UploaderContainer>
            {value ? (
                <div>
                    {getFilePreview()}

                    <FileInfo>
                        <FileDetails>
                            <FileIconWrapper>{getFileIcon()}</FileIconWrapper>
                            <FileTextInfo>
                                <FileName>{value.name}</FileName>
                                <FileSize>{(value.size / 1024).toFixed(1)} KB</FileSize>
                            </FileTextInfo>
                        </FileDetails>

                        <Button variant='ghost' size='sm' onClick={removeFile} disabled={disabled}>
                            <X size={16} />
                            <span className='sr-only'>Remove file</span>
                        </Button>
                    </FileInfo>
                </div>
            ) : (
                <DropZone
                    isDragActive={dragActive}
                    hasError={!!error}
                    disabled={disabled}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={disabled ? undefined : handleButtonClick}
                >
                    <input
                        ref={inputRef}
                        type='file'
                        style={{ display: 'none' }}
                        onChange={handleChange}
                        accept={accept}
                        disabled={disabled}
                    />

                    <DropZoneContent>
                        <IconWrapper>
                            <Upload size={24} color='#FFFFFF' />
                        </IconWrapper>

                        <div>
                            <DropZoneText>{dragActive ? 'Drop file here' : 'Drag & drop file here'}</DropZoneText>
                            <DropZoneSubText>
                                or <span>browse files</span>
                            </DropZoneSubText>
                        </div>

                        <DropZoneInfo>
                            {accept === '*/*' ? 'Any file format' : `Accepted formats: ${accept.replace(/\*/g, 'all')}`}
                        </DropZoneInfo>
                        <DropZoneInfo>Max size: {maxSize / (1024 * 1024)}MB</DropZoneInfo>
                    </DropZoneContent>
                </DropZone>
            )}

            {uploadProgress > 0 && uploadProgress < 100 && (
                <ProgressContainer>
                    <ProgressInfo>
                        <ProgressText>Uploading...</ProgressText>
                        <ProgressValue>{uploadProgress}%</ProgressValue>
                    </ProgressInfo>
                    <Progress value={uploadProgress} />
                </ProgressContainer>
            )}

            {error && (
                <ErrorMessage>
                    <AlertCircle size={12} />
                    {error}
                </ErrorMessage>
            )}

            {uploadProgress === 100 && !error && (
                <SuccessMessage>
                    <CheckCircle size={12} />
                    File uploaded successfully
                </SuccessMessage>
            )}
        </UploaderContainer>
    );
};

export default FileUploader;