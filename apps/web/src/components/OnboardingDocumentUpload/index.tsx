'use client';

import React, {
    useState,
    useCallback,
    useEffect
} from 'react';

import {
    AlertCircle,
    CheckCircle,
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
    const [errors, setErrors] = useState({
        idDocument: false,
        selfieWithId: false,
        general: '',
    });
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);

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

    const validateForm = () => {
        const newErrors = {
            idDocument: !formData.idDocument,
            selfieWithId: !formData.selfieWithId,
            general: '',
        };

        setErrors(newErrors);

        if (newErrors.idDocument || newErrors.selfieWithId) {
            setErrors((prev) => ({
                ...prev,
                general: 'Ambos os documentos são obrigatórios para continuar.',
            }));
            return false;
        };

        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAttemptedSubmit(true);

        if (validateForm()) {
            onNext(formData);
        };
    };

    useEffect(() => {
        if (attemptedSubmit) {
            validateForm();
        };
    }, [formData, attemptedSubmit]);

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
                                $hasError={errors.idDocument && attemptedSubmit}
                            >
                                {errors.idDocument && attemptedSubmit && <S.RequiredBadge>Obrigatório</S.RequiredBadge>}

                                {formData.idDocument ? (
                                    <>
                                        <S.UploadTitle>ID Document Uploaded</S.UploadTitle>
                                        <S.FileInfo>{formData.idDocument.file.name}</S.FileInfo>
                                        {formData.idDocument.file.type.startsWith('image/') && (
                                            <S.FilePreview>
                                                <img src={formData.idDocument.preview || '/placeholder.svg'} alt='ID Document Preview' />
                                            </S.FilePreview>
                                        )}
                                        <S.ValidationStatus>
                                            <S.ValidationIcon $isValid={true}>
                                                <CheckCircle size={16} />
                                            </S.ValidationIcon>
                                            <S.ValidationText $isValid={true}>Documento enviado com sucesso</S.ValidationText>
                                        </S.ValidationStatus>
                                    </>
                                ) : (
                                    <>
                                        <S.UploadIcon $hasError={errors.idDocument && attemptedSubmit}>
                                            {errors.idDocument && attemptedSubmit ? <AlertCircle size={24} /> : <Upload size={24} />}
                                        </S.UploadIcon>
                                        <S.UploadTitle $hasError={errors.idDocument && attemptedSubmit}>
                                            Documento de Identidade (RG/CPF)
                                        </S.UploadTitle>
                                        <S.UploadDescription>
                                            Arraste e solte o arquivo aqui
                                            <br />
                                            ou procure nos seus arquivos
                                        </S.UploadDescription>
                                        <S.FileInfo>
                                            Formatos aceitos: image/png, image/jpeg
                                            <br />
                                            Tamanho máximo: 5MB
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
                                $hasError={errors.selfieWithId && attemptedSubmit}
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
                                        {errors.selfieWithId && attemptedSubmit && <S.RequiredBadge>Obrigatório</S.RequiredBadge>}

                                        {formData.selfieWithId ? (
                                            <>
                                                <S.UploadTitle>Selfie Enviada</S.UploadTitle>
                                                <S.FileInfo>{formData.selfieWithId.file.name}</S.FileInfo>
                                                <S.FilePreview>
                                                    <img src={formData.selfieWithId.preview || '/placeholder.svg'} alt='Selfie Preview' />
                                                </S.FilePreview>
                                                <S.ValidationStatus>
                                                    <S.ValidationIcon $isValid={true}>
                                                        <CheckCircle size={16} />
                                                    </S.ValidationIcon>
                                                    <S.ValidationText $isValid={true}>Selfie enviada com sucesso</S.ValidationText>
                                                </S.ValidationStatus>
                                            </>
                                        ) : (
                                            <>
                                                <S.UploadIcon $hasError={errors.idDocument && attemptedSubmit}>
                                                    {errors.idDocument && attemptedSubmit ? <AlertCircle size={24} /> : <Upload size={24} />}
                                                </S.UploadIcon>
                                                <S.UploadTitle $hasError={errors.idDocument && attemptedSubmit}>
                                                    Selfie com o Documento
                                                </S.UploadTitle>
                                                <S.UploadDescription>
                                                    Arraste e solte o arquivo aqui
                                                    <br />
                                                    ou procure nos seus arquivos
                                                </S.UploadDescription>
                                                <S.FileInfo>
                                                    Formatos aceitos: image/png, image/jpeg
                                                    <br />
                                                    Tamanho máximo: 5MB
                                                </S.FileInfo>
                                            </>
                                        )}
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

                    {errors.general && attemptedSubmit && (
                        <S.ErrorMessage>
                            <AlertCircle size={16} />
                            {errors.general}
                        </S.ErrorMessage>
                    )}

                    <S.ButtonContainer>
                        <Button type='button' $variant='outline' onClick={onBack}>
                            Back
                        </Button>
                        <Button type='submit' $variant='primary' disabled={!formData.idDocument || !formData.selfieWithId}>
                            Next
                        </Button>
                    </S.ButtonContainer>
                </form>
            </CardContent>
        </S.FormContainer>
    );
};