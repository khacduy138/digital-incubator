import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export enum ProjectStageDto {
  IDEA = 'IDEA',
  VALIDATING = 'VALIDATING',
  BUILDING = 'BUILDING',
}

export class CreateProjectDto {
  @ApiProperty({ example: 'EduTech AI Tutor' })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name!: string;

  @ApiProperty({ example: 'AI gia sư cá nhân hóa cho học sinh cấp 3' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  tagline?: string;

  @ApiProperty({ example: 'Nền tảng gia sư AI...' })
  @IsString()
  @MinLength(20)
  @MaxLength(5000)
  description!: string;

  @ApiProperty({ example: 'Học sinh gặp khó khăn khi tự học' })
  @IsOptional()
  @IsString()
  problem?: string;

  @ApiProperty({ example: 'AI chatbot gia sư' })
  @IsOptional()
  @IsString()
  solution?: string;

  @ApiProperty({ example: 'EdTech' })
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiProperty({ enum: ProjectStageDto, default: ProjectStageDto.IDEA })
  @IsOptional()
  @IsEnum(ProjectStageDto)
  stage?: ProjectStageDto;

  @ApiProperty({ example: ['edtech', 'ai'], type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
