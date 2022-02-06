-- AddForeignKey
ALTER TABLE "TempConnections" ADD CONSTRAINT "TempConnections_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
