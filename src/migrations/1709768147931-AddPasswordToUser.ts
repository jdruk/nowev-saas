import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordToUser1709768147931 implements MigrationInterface {
    name = 'AddPasswordToUser1709768147931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
