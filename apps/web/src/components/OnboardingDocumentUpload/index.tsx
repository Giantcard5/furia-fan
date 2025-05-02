'use client';

import React, { 
    useState, 
    useCallback 
} from 'react';

import { 
    Shield, 
    Upload 
} from 'lucide-react';

import { 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

import * as S from './styles';

interface DocumentUploadFormProps {
    initialData: any;
    onNext: (data: any) => void;
    onBack: () => void;
};

export default function DocumentUploadForm({ initialData, onNext, onBack }: DocumentUploadFormProps) {
    const [formData, setFormData] = useState({
        idDocument: initialData.idDocument || null,
        selfieWithId: initialData.selfieWithId || null,
    });

    const [dragActive, setDragActive] = useState({
        idDocument: false,
        selfieWithId: false,
    });

    const handleDrag = useCallback((e: React.DragEvent, type: 'idDocument' | 'selfieWithId', active: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive((prev) => ({ ...prev, [type]: active }));
    }, []);

    const handleDrop = useCallback((e: React.DragEvent, type: 'idDocument' | 'selfieWithId') => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive((prev) => ({ ...prev, [type]: false }));

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            handleFile(file, type);
        };
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: 'idDocument' | 'selfieWithId') => {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            handleFile(file, type);
        };
    }, []);

    const handleFile = (file: File, type: 'idDocument' | 'selfieWithId') => {
        const validTypes =
            type === 'idDocument'
                ? ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
                : ['image/jpeg', 'image/png', 'image/jpg'];

        if (!validTypes.includes(file.type)) {
            alert(`Invalid file type. Please upload ${type === 'idDocument' ? 'an image or PDF' : 'an image'}.`);
            return;
        };

        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large. Maximum size is 5MB.');
            return;
        };

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prev) => ({
                ...prev,
                [type]: {
                    file,
                    preview: reader.result as string,
                },
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <S.FormContainer>
            <CardHeader>
                <CardTitle>Document Verification</CardTitle>
                <CardDescription>Please upload your identification documents for verification.</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <S.IconContainer>
                        <S.Icon>
                            <Shield size={40} />
                        </S.Icon>
                    </S.IconContainer>

                    <S.UploadGrid>
                        <div>
                            <S.UploadArea
                                className={`${dragActive.idDocument ? 'active' : ''} ${formData.idDocument ? 'has-file' : ''}`}
                                onDragEnter={(e) => handleDrag(e, 'idDocument', true)}
                                onDragLeave={(e) => handleDrag(e, 'idDocument', false)}
                                onDragOver={(e) => handleDrag(e, 'idDocument', true)}
                                onDrop={(e) => handleDrop(e, 'idDocument')}
                                onClick={() => document.getElementById('id-document-upload')?.click()}
                            >
                                {formData.idDocument ? (
                                    <>
                                        <S.UploadTitle>ID Document Uploaded</S.UploadTitle>
                                        <S.FileInfo>{formData.idDocument.file.name}</S.FileInfo>
                                        {formData.idDocument.file.type.startsWith('image/') && (
                                            <S.FilePreview>
                                                <img src={formData.idDocument.preview || '/placeholder.svg'} alt='ID Document Preview' />
                                            </S.FilePreview>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <S.UploadIcon>
                                            <Upload size={24} />
                                        </S.UploadIcon>
                                        <S.UploadTitle>ID Document (RG/CPF)</S.UploadTitle>
                                        <S.UploadDescription>
                                            Drag & drop file here
                                            <br />
                                            or browse files
                                        </S.UploadDescription>
                                        <S.FileInfo>
                                            Accepted formats: image/png,image/jpeg,application/pdf
                                            <br />
                                            Max size: 5MB
                                        </S.FileInfo>
                                    </>
                                )}
                                <S.HiddenInput
                                    id='id-document-upload'
                                    type='file'
                                    accept='.jpg,.jpeg,.png,.pdf'
                                    onChange={(e) => handleChange(e, 'idDocument')}
                                />
                            </S.UploadArea>
                        </div>

                        <div>
                            <S.UploadArea
                                className={`${dragActive.selfieWithId ? 'active' : ''} ${formData.selfieWithId ? 'has-file' : ''}`}
                                onDragEnter={(e) => handleDrag(e, 'selfieWithId', true)}
                                onDragLeave={(e) => handleDrag(e, 'selfieWithId', false)}
                                onDragOver={(e) => handleDrag(e, 'selfieWithId', true)}
                                onDrop={(e) => handleDrop(e, 'selfieWithId')}
                                onClick={() => document.getElementById('selfie-upload')?.click()}
                            >
                                {formData.selfieWithId ? (
                                    <>
                                        <S.UploadTitle>Selfie Uploaded</S.UploadTitle>
                                        <S.FileInfo>{formData.selfieWithId.file.name}</S.FileInfo>
                                        <S.FilePreview>
                                            <img src={formData.selfieWithId.preview || '/placeholder.svg'} alt='Selfie Preview' />
                                        </S.FilePreview>
                                    </>
                                ) : (
                                    <>
                                        <S.UploadIcon>
                                            <Upload size={24} />
                                        </S.UploadIcon>
                                        <S.UploadTitle>Selfie with ID</S.UploadTitle>
                                        <S.UploadDescription>
                                            Drag & drop file here
                                            <br />
                                            or browse files
                                        </S.UploadDescription>
                                        <S.FileInfo>
                                            Accepted formats: image/png,image/jpeg
                                            <br />
                                            Max size: 5MB
                                        </S.FileInfo>
                                    </>
                                )}
                                <S.HiddenInput
                                    id='selfie-upload'
                                    type='file'
                                    accept='.jpg,.jpeg,.png'
                                    onChange={(e) => handleChange(e, 'selfieWithId')}
                                />
                            </S.UploadArea>
                        </div>
                    </S.UploadGrid>

                    <S.ButtonContainer>
                        <Button type='button' $variant='outline' onClick={onBack}>
                            Back
                        </Button>
                        <Button type='submit' $variant='primary'>
                            Next
                        </Button>
                    </S.ButtonContainer>
                </form>
            </CardContent>
        </S.FormContainer>
    );
};