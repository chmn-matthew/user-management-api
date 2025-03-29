userRouter.delete("/user/:id", async(req: Request, res : Response) => {
    try {
        const id = (req.params.id)

        const user = await database.findOne(id)

        if (!user) {
             res.status(StatusCodes.NOT_FOUND).json({error : `User does not exist`})
        }

        await database.remove(id)

         res.status(StatusCodes.OK).json({error : "User deleted"})
    }
    catch(error) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})